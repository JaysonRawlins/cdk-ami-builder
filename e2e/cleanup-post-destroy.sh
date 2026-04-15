#!/usr/bin/env bash
set -euo pipefail

STACK_NAME="CdkAmiBuilderE2ETest"
REGION="${AWS_REGION:-us-east-2}"

echo "=== Post-Destroy Cleanup ==="

# Deregister AMIs created by Image Builder for this stack
echo "Finding AMIs created by Image Builder..."
AMI_IDS=$(aws ec2 describe-images \
  --owners self \
  --region "$REGION" \
  --filters "Name=tag:CreatedBy,Values=EC2 Image Builder" \
             "Name=name,Values=*${STACK_NAME}*" \
  --query "Images[].ImageId" \
  --output text 2>/dev/null || true)

for AMI_ID in $AMI_IDS; do
  if [ -n "$AMI_ID" ] && [ "$AMI_ID" != "None" ]; then
    echo "Deregistering AMI: $AMI_ID"

    # Get snapshot IDs before deregistering
    SNAP_IDS=$(aws ec2 describe-images \
      --image-ids "$AMI_ID" \
      --region "$REGION" \
      --query "Images[].BlockDeviceMappings[].Ebs.SnapshotId" \
      --output text 2>/dev/null || true)

    aws ec2 deregister-image --image-id "$AMI_ID" --region "$REGION" 2>/dev/null || true

    for SNAP_ID in $SNAP_IDS; do
      if [ -n "$SNAP_ID" ] && [ "$SNAP_ID" != "None" ]; then
        echo "Deleting snapshot: $SNAP_ID"
        aws ec2 delete-snapshot --snapshot-id "$SNAP_ID" --region "$REGION" 2>/dev/null || true
      fi
    done
  fi
done

# Force-delete the CloudFormation stack if it still exists (stuck in DELETE_FAILED)
STACK_STATUS=$(aws cloudformation describe-stacks \
  --stack-name "$STACK_NAME" \
  --region "$REGION" \
  --query "Stacks[0].StackStatus" \
  --output text 2>/dev/null || echo "DOES_NOT_EXIST")

if [ "$STACK_STATUS" = "DELETE_FAILED" ]; then
  echo "Stack in DELETE_FAILED state. Attempting force delete..."

  # Get resources that failed to delete
  FAILED_RESOURCES=$(aws cloudformation describe-stack-resources \
    --stack-name "$STACK_NAME" \
    --region "$REGION" \
    --query "StackResources[?ResourceStatus=='DELETE_FAILED'].LogicalResourceId" \
    --output text 2>/dev/null || true)

  if [ -n "$FAILED_RESOURCES" ]; then
    echo "Retaining failed resources and deleting stack: $FAILED_RESOURCES"
    # shellcheck disable=SC2086
    aws cloudformation delete-stack \
      --stack-name "$STACK_NAME" \
      --region "$REGION" \
      --retain-resources $FAILED_RESOURCES 2>/dev/null || true
  fi
elif [ "$STACK_STATUS" != "DOES_NOT_EXIST" ] && [ "$STACK_STATUS" != "DELETE_COMPLETE" ]; then
  echo "Stack still exists in state: $STACK_STATUS"
fi

# Clean up orphaned Image Builder resources by prefix
echo "Cleaning up orphaned Image Builder resources..."
for COMPONENT_ARN in $(aws imagebuilder list-components \
  --owner Self \
  --region "$REGION" \
  --query "componentVersionList[?contains(name, '${STACK_NAME}')].arn" \
  --output text 2>/dev/null || true); do
  if [ -n "$COMPONENT_ARN" ] && [ "$COMPONENT_ARN" != "None" ]; then
    echo "Deleting component: $COMPONENT_ARN"
    # List and delete all build versions first
    for BUILD_ARN in $(aws imagebuilder list-component-build-versions \
      --component-version-arn "$COMPONENT_ARN" \
      --region "$REGION" \
      --query "componentSummaryList[].arn" \
      --output text 2>/dev/null || true); do
      aws imagebuilder delete-component --component-build-version-arn "$BUILD_ARN" --region "$REGION" 2>/dev/null || true
    done
  fi
done

for RECIPE_ARN in $(aws imagebuilder list-image-recipes \
  --owner Self \
  --region "$REGION" \
  --query "imageRecipeSummaryList[?contains(name, '${STACK_NAME}')].arn" \
  --output text 2>/dev/null || true); do
  if [ -n "$RECIPE_ARN" ] && [ "$RECIPE_ARN" != "None" ]; then
    echo "Deleting image recipe: $RECIPE_ARN"
    aws imagebuilder delete-image-recipe --image-recipe-arn "$RECIPE_ARN" --region "$REGION" 2>/dev/null || true
  fi
done

for INFRA_ARN in $(aws imagebuilder list-infrastructure-configurations \
  --region "$REGION" \
  --query "infrastructureConfigurationSummaryList[?contains(name, '${STACK_NAME}')].arn" \
  --output text 2>/dev/null || true); do
  if [ -n "$INFRA_ARN" ] && [ "$INFRA_ARN" != "None" ]; then
    echo "Deleting infrastructure config: $INFRA_ARN"
    aws imagebuilder delete-infrastructure-configuration --infrastructure-configuration-arn "$INFRA_ARN" --region "$REGION" 2>/dev/null || true
  fi
done

echo "Post-destroy cleanup complete."
