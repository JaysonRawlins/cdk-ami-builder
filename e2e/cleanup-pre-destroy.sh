#!/usr/bin/env bash
set -euo pipefail

STACK_NAME="CdkAmiBuilderE2ETest"
REGION="${AWS_REGION:-us-east-2}"

echo "=== Pre-Destroy Cleanup ==="

# Find Image Builder pipeline ARN from the CloudFormation stack
PIPELINE_ARN=$(aws cloudformation describe-stack-resources \
  --stack-name "$STACK_NAME" \
  --region "$REGION" \
  --query "StackResources[?ResourceType=='AWS::ImageBuilder::ImagePipeline'].PhysicalResourceId" \
  --output text 2>/dev/null || true)

if [ -z "$PIPELINE_ARN" ]; then
  echo "No Image Builder pipeline found in stack. Skipping."
  exit 0
fi

echo "Found pipeline: $PIPELINE_ARN"

# List images created by this pipeline and cancel any in-progress builds
IMAGES=$(aws imagebuilder list-image-pipeline-images \
  --image-pipeline-arn "$PIPELINE_ARN" \
  --region "$REGION" \
  --query "imageSummaryList[?state.status!='AVAILABLE' && state.status!='FAILED' && state.status!='CANCELLED'].arn" \
  --output text 2>/dev/null || true)

for IMAGE_ARN in $IMAGES; do
  if [ -n "$IMAGE_ARN" ] && [ "$IMAGE_ARN" != "None" ]; then
    echo "Cancelling in-progress image build: $IMAGE_ARN"
    aws imagebuilder cancel-image-creation \
      --image-build-version-arn "$IMAGE_ARN" \
      --region "$REGION" 2>/dev/null || true
  fi
done

# Wait for cancellations to take effect
if [ -n "$IMAGES" ] && [ "$IMAGES" != "None" ]; then
  echo "Waiting 30s for cancellations to propagate..."
  sleep 30
fi

echo "Pre-destroy cleanup complete."
