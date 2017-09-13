#!/bin/bash

docker run --rm -i \
-e COMMIT_DELIMITER="DELIMITER" \
-e PRESET="eslint" \
-e GIT_URL="MY/URKL" \
madoos/node-pipe-changelog-generator:latest

