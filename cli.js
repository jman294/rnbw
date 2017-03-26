#!/usr/bin/env node

var readline = require('readline')
var fs = require('fs')
var path = process.argv[2]
var rnbw = require('./index')

if (process.argv.length < 3) {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  })
  var input = ''
  rl.on('line', function (line) {
    input += line + '\n'
  })
  rl.on('close', function () {
    console.log(rnbw.rainbow(input, 3))
  })
} else {
  if (!fs.existsSync(path)) {
    console.log('Could not find file specified by that path')
    process.exit(1)
  } else {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) throw err
      console.log(rnbw.rainbow(data, 3))
    })
  }
}
