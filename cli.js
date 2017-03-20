#!/usr/bin/env node
const readline = require('readline')
const fs = require('fs')
const path = process.argv[2]
const rnbw = require('./index')

if (process.argv.length < 3) {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  })
  let input = ''
  rl.on('line', (line) => {
    input += line + '\n'
  })
  rl.on('close', () => {
    console.log(rnbw.rainbow(input))
  })
} else {
  if (!fs.existsSync(path)) {
    console.log('Could not find file specified by that path')
    process.exit(1)
  } else {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) throw err
      console.log(rnbw.rainbow(data))
    })
  }
}
