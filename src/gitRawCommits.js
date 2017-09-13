'use strict'

const { Readable } = require('stream')
const split = require('split2')
const { curry } = require('ramda')

module.exports = curry(gitRawCommits)

function gitRawCommits (COMMIT_DELIMITER, options) {
  const commitStream = new Readable({ read () { } })
  process.stdin
  .pipe(split(COMMIT_DELIMITER))
  .on('data', (commit) => {
    commitStream.push(commit)
  })
  .on('end', () => {
    commitStream.push(null)
    commitStream.emit('close')
  })

  return commitStream
}
