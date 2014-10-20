/**

*hashy
*/

var crypto = require('crypto'),
    hashes = crypto.getHashes();

console.log(hashes.join(', '));
