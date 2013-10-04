/**
 * test.js
 * -------
 * Tests for Sets
 * Author: Johann-Michael Thiebaut <johann.thiebaut@gmail.com>
 */

var should = require('should');

var Set = require('../lib/set');

describe('Set', function() {
  describe('new Set()', function() {
    it('should create empty an empty set when no argument is provided', function() {
      var s = new Set();
      should.strictEqual(s.isEmpty(), true);
      should.strictEqual(s.size(), 0);
    })
  })
})
