var _ = require('lodash');

var worker = function (list) {
	// do some work and return stuff
	return _.filter(list, {'active' : true});
};

module.exports = worker;