'use strict'

const conventionalChangelog = require('conventional-changelog')

conventionalChangelog({
  preset: 'eslint',
  s: true,
  outfile: 'CHANGELOG.md'
})
