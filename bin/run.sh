#!/bin/bash

docker run --rm -i \
-e COMMIT_DELIMITER="DELIMITER" \
-e PRESET="eslint" \
madoos/node-pipe-changelog-generator:latest