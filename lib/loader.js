var fs = require('fs');

exports.load = function (path, cb) {
	fs.readFile(path, 'utf8', cb);
};