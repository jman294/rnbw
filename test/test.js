const assert = require('assert')
const rnbw = require('../index')

describe('rnbw', function() {
  describe('#colorify', function() {
    it('should surround empty string in color', function() {
      let string = '\u001b[38;5;38m\u001b[39m'
      assert.equal(rnbw.colorify(38, ''), string)
    })
    it('should surround string in color', function() {
      let string = '\u001b[38;5;38mFarts\u001b[39m'
      assert.equal(rnbw.colorify(38, 'Farts'), string)
    })
    it('should return multi line for multi-line input', function() {
      let num = 'asdf\nasdf\nasdf'.split('\n').length
      assert.equal(num, rnbw.colorify('asdf\nasdf\nasdf').split('\n').length)
    })
  })
  describe('#rainbow', function() {
    it('should return empty string for emtpy string', function() {
      assert.equal(rnbw.rainbow(''), '')
    })
    it('should return one line for one line input', function() {
      assert.ok(rnbw.rainbow('asdf').match(/^.+$/))
    })
    it('should return multiple lines for multi-line input', function() {
      let num = 'asdf\nasdf\nasdf'.split('\n').length
      assert.equal(num, rnbw.rainbow('asdf\nasdf\nasdf').split('\n').length)
    })
  })
})
