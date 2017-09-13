'use strict'

const { streamifyArray } = require('./util')

module.exports = function gitRawCommits (COMMITS, COMMIT_DELIMITER, options) {
  const commits = COMMITS.split(COMMIT_DELIMITER)
  return streamifyArray(commits)
}
