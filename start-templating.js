var _ = require('lodash');

var worker = function (user) {
		var template = "Hello <%= name %> (logins: <%= login.length %>)";

		return _.template(template)(user);
};

module.exports = worker;