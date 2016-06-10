var _ = require('lodash');

var worker = function (items) {
	// input:
	// [ 
	// 	{ article: 1, quantity: 4 },
  //  { article: 2, quantity: 2 },
  //  { article: 1, quantity: 5 } 
  // ]

  // output: 
  // [ 
  //  	{ article: 1, total_orders: 9 },
  //   { article: 2, total_orders: 2 } 
  // ]
  var result = [];

  // first, group by article
  items = _.groupBy(items, 'article');
  
  // this gives us:
  // { 
  // 	'41': [ 
  // 		{ article: 41, quantity: 1 } 
  // 	],
  // 	'655': [ 
  // 		{ article: 655, quantity: 2 }, 
  // 		{ article: 655, quantity: 4 } 
  // 	],
  // 	'2323': [ 
  // 		{ article: 2323, quantity: 4 },
  //    	{ article: 2323, quantity: 10 } 
  //   ]
  // }

  // 
  _.forEach(items, function (item, key) {	

  	var total = _.reduce(item, function (sum, item) {
  		return sum + item.quantity;
  	}, 0);

  	result.push({
  		article: parseInt(key),
  		total_orders: total
  	});
  });

  return result.reverse();
};

module.exports = worker;