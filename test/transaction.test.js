'use strict';

var assert = require('assert')
  , should = require('should');

var inquiryData = {};

suite('inquiry', function() {


test('An inquiry should contain a plate/vin', function(done) {
  inquiryData.inquire.plate.should.eql(1);
 done();
});
});
