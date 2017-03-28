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
    it('should return correct coloring for 38', function () {
      let result = '%1B%5B38%3B5%3B38mFarts%20and%20lots%0Amore%20farts%20where%20that%20came%20from%1B%5B39m'
      assert.equal(rnbw.colorify(38, 'Farts and lots\nmore farts where that came from'),
                   unescape(result))
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
    it('should ouput correct pattern for blur of four and multiple lines', function () {
      let result = '%1B%5B38%3B5%3B196mF%1B%5B39m%1B%5B38%3B5%3B196ma%1B%5B39m%1B%5B38%3B5%3B196mr%1B%5B39m%1B%5B38%3B5%3B196mt%1B%5B39m%1B%5B38%3B5%3B202ms%1B%5B39m%1B%5B38%3B5%3B202m%20%1B%5B39m%1B%5B38%3B5%3B202ma%1B%5B39m%1B%5B38%3B5%3B202mn%1B%5B39m%1B%5B38%3B5%3B208md%1B%5B39m%1B%5B38%3B5%3B208m%20%1B%5B39m%1B%5B38%3B5%3B208ml%1B%5B39m%1B%5B38%3B5%3B208mo%1B%5B39m%1B%5B38%3B5%3B214mt%1B%5B39m%1B%5B38%3B5%3B214ms%1B%5B39m%0A%1B%5B38%3B5%3B196mm%1B%5B39m%1B%5B38%3B5%3B196mo%1B%5B39m%1B%5B38%3B5%3B196mr%1B%5B39m%1B%5B38%3B5%3B202me%1B%5B39m%1B%5B38%3B5%3B202m%20%1B%5B39m%1B%5B38%3B5%3B202mf%1B%5B39m%1B%5B38%3B5%3B202ma%1B%5B39m%1B%5B38%3B5%3B208mr%1B%5B39m%1B%5B38%3B5%3B208mt%1B%5B39m%1B%5B38%3B5%3B208ms%1B%5B39m%1B%5B38%3B5%3B208m%20%1B%5B39m%1B%5B38%3B5%3B214mw%1B%5B39m%1B%5B38%3B5%3B214mh%1B%5B39m%1B%5B38%3B5%3B214me%1B%5B39m%1B%5B38%3B5%3B214mr%1B%5B39m%1B%5B38%3B5%3B220me%1B%5B39m%1B%5B38%3B5%3B220m%20%1B%5B39m%1B%5B38%3B5%3B220mt%1B%5B39m%1B%5B38%3B5%3B220mh%1B%5B39m%1B%5B38%3B5%3B226ma%1B%5B39m%1B%5B38%3B5%3B226mt%1B%5B39m%1B%5B38%3B5%3B226m%20%1B%5B39m%1B%5B38%3B5%3B226mc%1B%5B39m%1B%5B38%3B5%3B154ma%1B%5B39m%1B%5B38%3B5%3B154mm%1B%5B39m%1B%5B38%3B5%3B154me%1B%5B39m%1B%5B38%3B5%3B154m%20%1B%5B39m%1B%5B38%3B5%3B82mf%1B%5B39m%1B%5B38%3B5%3B82mr%1B%5B39m%1B%5B38%3B5%3B82mo%1B%5B39m%1B%5B38%3B5%3B82mm%1B%5B39m'
      assert.equal(rnbw.rainbow('Farts and lots\nmore farts where that came from', 4),
                   unescape(result))
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
