'use strict'

const {
  Transform,
  Readable
} = require('stream')

module.exports = {
  streamifyArray,
  mapTransform
}

function streamifyArray (list) {
  const readable = new Readable({ objectMode: true })
  for (let i = 0; i < list.length; i++) readable.push(list[i])
  readable.push(null)
  return readable
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
