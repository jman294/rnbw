#!/usr/bin/env node

var RAINBOW_COLORS = [124, 196, 202, 208, 214, 220, 226, 154, 82, 46, 42, 45, 33, 21, 19]

function rainbow (text, blur) {
  if (text === '') return ''
  var color = Math.floor(Math.random() * 10 % RAINBOW_COLORS.length)
  var result = ''
  var lines = text.split('\n')
  var segment = blur
  for (var line in lines) {
    if (line % segment === 0) {
      color = (color + 1) % RAINBOW_COLORS.length
    }
    result += rainbowLine(lines[line], blur, segment, color) + '\n'
    blur = blur - 1 <= 0 ? segment : blur - 1
  }
  return result.slice(0, result.length-1)
}

function colorify (num, text) {
  return '\u001b[38;5;' + num + 'm' + text + '\u001b[39m'
}

function rainbowLine (line, startLength, segmentLength, startColor) {
  if (line === '') return ''
  var result = ''
  var chars = line.split('')
  var checkLength = startLength
  var oldLength = 0
  for (var c = 0; c < chars.length; c += 1) {
    if (c - oldLength === checkLength) {
      startColor = (startColor + 1) % RAINBOW_COLORS.length
      oldLength = c
      checkLength = segmentLength
    }

    result += colorify(RAINBOW_COLORS[startColor], chars[c])
  }
  return result
}

module.exports = {
  rainbow,
  colorify,
  rainbowLine
}
