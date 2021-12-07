var log = require('fancy-log');

/**
* Middleware de gestion d'erreur
* http://expressjs.com/fr/guide/error-handling.html
*/
const handleError = (err, req, res, next) => {
	const message = err.message || err;
	const status = err.status || 500;

	console.error(`Error:${status}`, '|', err.stack);

	if (req.xhr) {
		res.status(status).json({ status, message });
	} else {
		if (process.env.NODE_ENV === 'development') {
			res.status(status);
			res.send(`
				<div translate="no">
					<pre><b>Error ${status} : ${message}</b></pre>
					<pre>${err.stack}</pre>
				</div>
			`);
		} else {
			res.status(status);
			res.send(err.message);
		}
	}
};

module.exports = {
	handleError,
}