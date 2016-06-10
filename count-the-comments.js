var _ = require('lodash');

var worker = function (items) {
	var result = [];

	// right now, items looks like:
	// [ 
	// 	{ "username": "tim", "comment": "when you have new workshoppers?" },
	// 	{ "username": "cat_lover", "comment": "wtf? where are all the cats gone?" },
	// 	{ "username": "max", "comment": "where have you been on friday? we missed you!" },
	// 	{ "username": "max", "comment": "Do dont anwer anymore - why?" },
	// 	{ "username": "cat_lover", "comment": "MORE cats!!!" },
	// 	{ "username": "max", "comment": "i really love your site" }
	// ]

	// first we want to group the comments by user
	var groupedCommentsByUser = _.groupBy(items, 'username');

	// which gives us:
	// { 
	// 	tim: [ 
	// 		{ username: 'tim', comment: 'when you have new workshoppers?' } 
	// 	],
	// 	cat_lover: [ 
	// 		{ username: 'cat_lover', comment: 'wtf? where are all the cats gone?' },
	// 		{ username: 'cat_lover', comment: 'MORE cats!!!' } 
	// 	],
	// 	max: [ 
	// 		{ username: 'max', comment: 'where have you been on friday? we missed you!' },
	// 		{ username: 'max', comment: 'Do dont anwer anymore - why?' },
	// 		{ username: 'max', comment: 'i really love your site' } 
	// 	] 
	// }

	_.forEach(groupedCommentsByUser, function (comments, username) {
		result.push({
			username: username,
			comment_count: _.size(comments)
		});	
	});

	// at this point, result is now:
	[ 
		{ username: 'tim', comment_count: 1 },
  	{ username: 'cat_lover', comment_count: 2 },
  	{ username: 'max', comment_count: 3 } 
  ]

  // sort by comment count and return the result
  return _.sortBy(result, 'comment_count').reverse();

  // alternative solution with _.chain:
  // var commentcount = function (comments) {
  // 	return _.chain(comments)
  // 		.groupBy('username')
  // 		.map(function(item, name) {
  // 			return {
  // 				username: name,
  // 				comment_count: _.size(item)
  // 			}
  // 		})
  // 		.sortBy(function(counted) {
  // 			return -counted['comment_count'];
  // 		});
  // }
};

module.exports = worker;