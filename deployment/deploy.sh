#!/usr/bin/env bash

aws s3 sync ./build-artifact s3://$S3_BUCKET --acl public-read
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths /*