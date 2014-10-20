var assert = require('assert');
var should = require('should');
var db     = require('../lib/db');


suite('database', function() {

test('open should open a database connection', function(done) {
    db.open(done);
});
});
