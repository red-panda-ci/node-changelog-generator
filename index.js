'use strict'

const replace = require('string-replace-stream')
const markdown = require('markdown-stream')
const { keys, identity, ifElse, equals } = require('ramda')
const mock = require('mock-require')
const env = require('./ENV')
const { PRESET, COMMIT_DELIMITER, GIT_URL, FORMAT } = env
const gitRawCommits = require('./src/gitRawCommits')
const { handleIfHasCorrectArgs, mapTransform } = require('./src/util')
const wrongGitRepository = 'https://github.com/madoos/node-changelog-generator/commit' // conventional-changelog by default use it path. Changed by "GIT_URL"

handleIfHasCorrectArgs(env, keys(env))

/*
To get the list of commits "conventional-changelog" use the .git folder
inside use the module "git-raw-commits"
to change that behavior is made a mock of "git-raw-commits" module and it taken as input stdin stream
*/
mock('git-raw-commits', gitRawCommits(COMMIT_DELIMITER))

const conventionalChangelog = require('conventional-changelog')
const htmlFormatter = () => markdown('full', { html: true })
const mdFormatter = () => mapTransform(identity)
const formatter = ifElse(equals('html'), htmlFormatter, mdFormatter)

conventionalChangelog({ preset: PRESET, s: true })
.pipe(replace(wrongGitRepository, GIT_URL))
.pipe(formatter(FORMAT))
.pipe(process.stdout)
