var _ = require('lodash');

var worker = function (townTemp) {

	var result = {
		hot: [],
		warm: [],
	};

	_.forEach(townTemp, function (town, townName) {
		console.log("TOWN: ", town);
		if (_.every(town, function(townTemp) {
			return townTemp > 19;
		})) {
			result.hot.push(townName);
		} else if (_.some(town, function(townTemp) {
			return townTemp > 19;
		})) {
			result.warm.push(townName);
		}
	});

	return result;
};

// official result

// breaking out the temperature checking into separate function

// var check_temp (item) {
// 	return item > 19;
// }

// _.forEach(townTemp, function (town, townName) {
// 	if (_.every(town, check_temp)) {
// 		result.hot.push(townName);
// 	} else if (_.some(town, check_temp)) {
// 		result.warm.push(townName);
// 	}
// }); 

// return result;

module.exports = worker;