'use strict'

module.exports = {
  COMMIT_DELIMITER: process.env.COMMIT_DELIMITER || '\\n',
  COMMITS: process.env.COMMITS,
  PRESET: process.env.PRESET,
  GIT_FOLDER: process.env.GIT_FOLDER === 'true'
}
