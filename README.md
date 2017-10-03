# node-changelog-generator

__

## Getting Started

To install:

    npm i --save node-changelog-generator

In your project:

``` bash
# Github case
git log --format="%B%n-hash-%n%H%n-gitTags-%n%d%n-committerDate-%n%ci%n------------------------ >8 ------------------------" HEAD --no-merges | docker run -i --rm -e COMMIT_DELIMITER='%B%n-hash-%n%H%n-gitTags-%n%d%n-committerDate-%n%ci%n------------------------ >8 ------------------------' -e PRESET='eslint' -e GIT_URL='https://github.com/madoos/node-changelog-generator/commit' -e FORMAT='md' madoos/node-pipe-changelog-generator
```

``` bash
# Bitbucket case
git log --format="%B%n-hash-%n%H%n-gitTags-%n%d%n-committerDate-%n%ci%n------------------------ >8 ------------------------" HEAD --no-merges | docker run -i --rm -e COMMIT_DELIMITER='%B%n-hash-%n%H%n-gitTags-%n%d%n-committerDate-%n%ci%n------------------------ >8 ------------------------' -e PRESET='eslint' -e GIT_URL='https://bitbucket.org/madoos/node-changelog-generator/commits' -e FORMAT='md' madoos/node-pipe-changelog-generator
```

## npm scripts

   * `test`
   * `test:unit`
   * `test:int`
   * `cove`
   * `cover:unit`
   * `lint`
   * `serve:coverage`
   * `serve:linter`
