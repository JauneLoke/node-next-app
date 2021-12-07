const data = require("../data/data.json")

module.exports = {
	get: (req, res, next) => {
		res.json(data);
	},

	getId: (req, res, next) => {
		res.json(data.find((post) => {
			return post.id === parseInt(req.params.id);
		}));
	}
};

