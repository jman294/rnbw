#!/usr/bin/env node
const RAINBOW_COLORS = [124, 196, 202, 208, 214, 220, 226, 154, 82, 46, 42, 45, 33, 21, 19]

function rainbow(text) {
  let charArray = text.split('')
  let start = Math.round(Math.random() * 10 % RAINBOW_COLORS.length)
  let colInd = start
  let result = ''
  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === '\n') {
      result += '\n'
      start++
      colInd = start
      continue
    }
    colInd = (colInd + 1) % RAINBOW_COLORS.length
    result += colorify(RAINBOW_COLORS[colInd], charArray[i])
  }
  return result
}

function colorify(num, text) {
  return '\u001b[38;5;' + num + 'm' + text + '\u001b[39m'
}

module.exports = { rainbow, colorify }
