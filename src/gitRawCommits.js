'use strict'

const { Readable } = require('stream')

module.exports = function gitRawCommits (options) {
  const commitStream = new Readable({ read () { } })
  process.stdin
    .on('data', (data) => {
      commitStream.push(data)
    })
    .on('end', () => {
      commitStream.push(null)
      commitStream.emit('close')
    })

  console.log(options)
  return commitStream
}
