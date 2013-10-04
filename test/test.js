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
    });
    it('should create a set containing the provided arguments', function() {
      var s = new Set('a', 'c');
      should.strictEqual(s.isEmpty(), false);
      should.strictEqual(s.size(), 2);
      should.strictEqual(s.contains('a'), true);
      should.strictEqual(s.contains('b'), false);
      should.strictEqual(s.contains('c'), true);
    });
    it('should copy a set when one is passed as an argument', function() {
      var r = new Set('a', 'c');
      var s = new Set(r);
      should.strictEqual(s.isEmpty(), false);
      should.strictEqual(s.size(), 2);
      should.strictEqual(s.contains('a'), true);
      should.strictEqual(s.contains('b'), false);
      should.strictEqual(s.contains('c'), true);
    })
  });
  describe('#isEmpty()', function() {
    it('should return true iff the set is empty', function() {
      var s = new Set();
      should.strictEqual(s.isEmpty(), true);
      s = new Set('a');
      should.strictEqual(s.isEmpty(), false);
    })
  });
  describe('#size()', function() {
    it('should return the size of the set', function() {
      var s = new Set();
      should.strictEqual(s.size(), 0);
      s = new Set('a');
      should.strictEqual(s.size(), 1);
      s = new Set('a', 'b', 'c', 'd');
      should.strictEqual(s.size(), 4);
    })
  });
  describe('#contains(elem)', function() {
    it('should return true iff elem is an element of the set.', function() {
      var s = new Set('a', 'c');
      should.strictEqual(s.contains('a'), true);
      should.strictEqual(s.contains('b'), false);
      should.strictEqual(s.contains('c'), true);
    })
  });
  describe('#add(elemA, elemB, ...)', function() {
    it('should add elements to the set.', function() {
      var s = new Set('a');
      s.add('a', 'c');
      should.strictEqual(s.isEmpty(), false);
      should.strictEqual(s.size(), 2);
      should.strictEqual(s.contains('a'), true);
      should.strictEqual(s.contains('b'), false);
      should.strictEqual(s.contains('c'), true);
    })
  });
  describe('#remove(elemA, elemB, ...)', function() {
    it('should remove elements from the set.', function() {
      var s = new Set('a', 'c');
      s.remove('b', 'c');
      should.strictEqual(s.isEmpty(), false);
      should.strictEqual(s.size(), 1);
      should.strictEqual(s.contains('a'), true);
      should.strictEqual(s.contains('b'), false);
      should.strictEqual(s.contains('c'), false);
    })
  });
  describe('#equals(that)', function() {
    it('should return tru iff the sets are equal.', function() {
      var r = new Set('a', 'c');
      var s = new Set('a', 'c');
      var t = new Set('a', 'b', 'c');
      should.strictEqual(r.equals(s), true);
      should.strictEqual(r.equals(t), false);
      should.strictEqual(s.equals(t), false);
    })
  });
})
