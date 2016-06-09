var _ = require('lodash');

var worker = function (items) {
	// sortBy sorts from smallest to largest
	var sortAscended = _.sortBy(items, 'quantity');
	return sortAscended.reverse();
};

// official answer (magic! why didn't I think of that)

// var worker = function (items) {
// 	return _.sortBy(items, function (item) {
// 		return -item.quantity;
// 	});
// }

module.exports = worker;

