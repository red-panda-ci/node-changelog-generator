'use strict'

const { forEach } = require('ramda')

module.exports = {
  handleIfHasCorrectArgs
}

function handleIfHasCorrectArgs (args, expected) {
  forEach((expectedKey) => {
    if (!args[expectedKey]) {
      process.stderr.write(`THE ENVIRONMENT VARIABLE "${expectedKey}" IS MANDATORY`)
      process.exit(1)
    }
  }, expected)
}
