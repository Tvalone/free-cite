var mongoose = require('mongodb').Db,
   Connection = require('mongodb').Connection,
   Server = require('mongod').Server;

var envHost = process.env['MONGO_NODE_DRIVER_HOST'],
    envPort = process.env['MONGO_NODE_DRIVER_PORT'],
    host = envHost != null ? envhost: 'localhost',
    port = envPort != null ? envPort: Connection.DEFAULT_PORT;

var db = new Db('freecite',
         new Server(host, port, {}),
         {native_parser:false});



