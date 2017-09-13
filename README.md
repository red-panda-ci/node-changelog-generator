# node-changelog-generator

__

## Getting Started

To install:

    npm i --save node-changelog-generator

In your project:

``` bash
git log --format="%B%n-hash-%n%H%n-gitTags-%n%d%n-committerDate-%n%ci%n------------------------ >8 ------------------------" HEAD --no-merges
```



## npm scripts

   * `tes`
   * `test:unit`
   * `test:int`
   * `cove`
   * `cover:unit`
   * `lint`
   * `serve:coverage`
   * `serve:linter`
