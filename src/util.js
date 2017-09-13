'use strict'

const { forEach } = require('ramda')
const { Transform } = require('stream')

module.exports = {
  handleIfHasCorrectArgs,
  mapTransform
}

function handleIfHasCorrectArgs (args, expected) {
  forEach((expectedKey) => {
    if (!args[expectedKey]) {
      process.stderr.write(`THE ENVIRONMENT VARIABLE "${expectedKey}" IS MANDATORY`)
      process.exit(1)
    }
  }, expected)
}

function mapTransform (fMap) {
  return new Transform({
    objectMode: true,
    writableObjectMode: true,
    transform: function (data, enc, done) {
      done(null, fMap(data))
    }
  })
}
