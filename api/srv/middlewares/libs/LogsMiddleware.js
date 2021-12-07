const moment = require('moment');

/**
 * Gestionnaire de log
 */
module.exports = {
	/**
	* Affiche les requêtes dans la console
	*/
	requestLog: (req, res, next) => {
		const dateTime = moment().format('DD/MM/YYYY HH:mm:ss');
		console.log(dateTime, "|", req.method, "|", req.originalUrl, "|");
		next();
	},
}