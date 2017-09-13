'use strict'

const mock = require('mock-require')
const gitRawCommits = require('./src/gitRawCommits')

const {
  PRESET,
  COMMIT_DELIMITER
} = require('./ENV')

mock('git-raw-commits', gitRawCommits(COMMIT_DELIMITER))

const conventionalChangelog = require('conventional-changelog')

conventionalChangelog({
  preset: PRESET,
  s: true
})
.pipe(process.stdout)
