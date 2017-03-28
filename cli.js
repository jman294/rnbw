#!/usr/bin/env node

var readline = require('readline')
var fs = require('fs')
var rnbw = require('./index')

if (process.argv.length < 3) {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  })
  var input = ''
  rl.on('line', function(line) {
    input += line + '\n'
  })
  rl.on('close', function() {
    console.log(rnbw.rainbow(input, 8))
  })
} else {
  var blur = 5
  var path = ''
  if (process.argv[2] === '-b' && !isNaN(process.argv[3])) {
    blur = process.argv[3]
    path = process.argv[4] || ''
  } else if (process.argv[2]) {
    path = process.argv[2]
  }
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
