const { ErrorHandler } = require("../../srv/services/ErrorHandler");

module.exports = {
	get: (req, res, next) => {
		req.session.myVar = (req.session.myVar || 0) + 1
		res.json("View : " + req.session.myVar);
	},
	post: (req, res, next) => {
		req.session.myVar = (req.session.myVar || 0) + 1
		res.json({ name: "Value : ", value: req.session.myVar });
	}
};

