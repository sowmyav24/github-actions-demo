#!/bin/sh
echo "Deploying artefact to S3"
aws s3 sync \
  ./build/ \
  s3://"github-actions-geek-night"
echo "Artefact deployed"
