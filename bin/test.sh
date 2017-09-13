#!/bin/bash

git log --format="%B%n-hash-%n%H%n-gitTags-%n%d%n-committerDate-%n%ci%nDELIMITER" HEAD --no-merges | COMMIT_DELIMITER="DELIMITER" PRESET="eslint" node index.js