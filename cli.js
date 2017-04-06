#!/usr/bin/env node

var readline = require('readline')
var fs = require('fs')
var rnbw = require('./index')

var blur = 4
var path = ''

if (process.argv.length > 2) {
  if (process.argv[2] === '-b') {
    if (!isNaN(process.argv[3])) {
      blur = process.argv[3]
      if (process.argv[4]) {
        path = process.argv[4]
      }
    }
  } else {
    path = process.argv[2]
  }
}

if (!process.stdin.isTTY) {
  var data = ''
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  })
  rl.on('line', function(line) {
    data += line + '\n'
  })
  rl.on('close', function() {
    console.log(rnbw.rainbow(data, Number(blur)))
  })
} else {
  if (!fs.existsSync(path)) {
    console.log('Could not find file specified by that path')
    process.exit(1)
  } else {
    fs.readFile(path, 'utf8', function(err, data) {
      if (err) throw err
      console.log(rnbw.rainbow(data, Number(blur)))
    })
  }
}
