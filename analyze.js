var _ = require('lodash');

var worker = function (items) {

	// input:
	// [ 
	// 	{ name: "mike",  income: 2563 },
	// 	{ name: "kim",   income: 1587 },
	// 	{ name: "liz",   income: 3541 },
	// 	{ name: "tom",   income: 2475 },
	// 	{ name: "bello", income: 987  },
	// 	{ name: "frank", income: 2975 } 
	// ]

	// output:
	// {
  // "average": 167,
  // "underperform": [
  // 	{ "name": "foobar", "income": 99 },
  // 	{ "name": "dummy", "income": 100 }
  // ],
  // "overperform": [
  // 	{ "name": "foo", "income": 302 }
  // ]
  // }

  var average;
  var underperformers = [];
  var overperformers = [];

 	// calculate the average
 	var totalIncome = _.reduce(items, function(sum, item) {
 		return sum += item.income;
 	}, 0);

 	average = totalIncome / items.length;

 	// filter underperformers and overperformers
 	overperformers = _.filter(items, function (item) {
 		return item.income > average
 	});

 	underperformers = _.filter(items, function (item) {
 		return item.income <= average;
 	});

 	overperformers = _.sortBy(overperformers, 'income');
 	underperformers = _.sortBy(underperformers, 'income');

 	// official solution sorts at the beginning,
 	// so there's no need for the previous 2 lines, like so:
 	// items = _.sortBy(items, 'income');

 	return {
 		average: average,
 		underperform: underperformers,
 		overperform: overperformers
 	}
}

module.exports = worker; 