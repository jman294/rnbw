const assert = require('assert')
const rnbw = require('../index')

describe('rnbw', function () {
  describe('#colorify', function () {
    it('should surround empty string in color', function () {
      let string = '\u001b[38;5;38m\u001b[39m'
      assert.equal(rnbw.colorify(38, ''), string)
    })
    it('should surround string in color', function () {
      let string = '\u001b[38;5;38mFarts\u001b[39m'
      assert.equal(rnbw.colorify(38, 'Farts'), string)
    })
    it('should return multi line for multi-line input', function () {
      let num = 'asdf\nasdf\nasdf'.split('\n').length
      assert.equal(num, rnbw.colorify('asdf\nasdf\nasdf').split('\n').length)
    })
  })
  describe('#rainbow', function () {
    it('should return empty string for emtpy string', function () {
      assert.equal(rnbw.rainbow('', 1), '')
    })
    it('should return one line for one line input', function () {
      assert.ok(rnbw.rainbow('asdf', 1).indexOf('\n') === -1)
    })
    it('should return multiple lines for multi-line input', function () {
      let result = rnbw.rainbow('asdf\nasdf\nasdf', 1)
      assert.notEqual(result.indexOf('\n'), result.lastIndexOf('\n'))
    })
  })
  describe('#rainbowLine', function () {
    it('should return empty string for empty string', function () {
      assert.equal(rnbw.rainbowLine(''), '')
    })
    it('should return one segment length of one', function () {
      let string = '\u001b[38;5;124mH\u001b[39m'
      assert.equal(rnbw.rainbowLine('H', 1, 1, 0), string)
    })
    it('should return one segment length of two', function () {
      let string = '\u001b[38;5;124mH\u001b[39m\u001b[38;5;124me\u001b[39m'
      assert.equal(rnbw.rainbowLine('He', 2, 2, 0), string)
    })
    it('should return correct variation of different start and regular lengths', function () {
      let string = '\u001b[38;5;124mH\u001b[39m\u001b[38;5;124me\u001b[39m'
      assert.equal(rnbw.rainbowLine('He', 2, 5, 0), string)
    })
    it('should return correct variation of different start and regular lengths of a considerable long length', function () {
      let string = '\u001b[38;5;124mH\u001b[39m\u001b[38;5;124me\u001b[39m' +
        '\u001b[38;5;124ml\u001b[39m\u001b[38;5;124ml\u001b[39m' +
        '\u001b[38;5;196mo\u001b[39m'
      assert.equal(rnbw.rainbowLine('Hello', 4, 5, 0), string)
    })
    it('should return correct variation of different start and regular lengths of a considerable long length', function () {
      let string = '\u001b[38;5;124mH\u001b[39m\u001b[38;5;196me\u001b[39m' +
        '\u001b[38;5;196ml\u001b[39m\u001b[38;5;196ml\u001b[39m' +
        '\u001b[38;5;196mo\u001b[39m'
      assert.equal(rnbw.rainbowLine('Hello', 1, 5, 0), string)
    })
  })
})
