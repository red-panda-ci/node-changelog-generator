'use strict'

const {
  COMMITS,
  COMMIT_DELIMITER,
  PRESET
} = require('./ENV')

const { partial } = require('ramda')
const gitRawCommits = require('./src/gitRawCommits')

const commitStream = partial(gitRawCommits, [COMMITS, COMMIT_DELIMITER])

/*
const mock = require('mock-require')
mock('git-raw-commits', commitStream)
*/
const conventionalChangelog = require('conventional-changelog')

conventionalChangelog({
  preset: PRESET,
  s: true
}, undefined, {

})
.pipe(process.stdout)
