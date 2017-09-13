'use strict'

const {
  PRESET
} = require('./ENV')

const gitRawCommits = require('./src/gitRawCommits')

const mock = require('mock-require')
mock('git-raw-commits', gitRawCommits)

const conventionalChangelog = require('conventional-changelog')

conventionalChangelog({
  preset: 'eslint',
  s: true
})
.pipe(process.stdout)
