var _ = require('lodash');

var worker = function(items) {
	return _.chain(items)
		.map(function (item) {
			return item.toUpperCase();
		})
		.map(function (item) {
			return item + 'CHAINED';
		})
		.sortBy()
		.value();
};

module.exports = worker;