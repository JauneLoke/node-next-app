const path = require('path');
const fs = require('fs');

/**
 * Regroupe différentes méthodes de réponse pour le client
 */
module.exports = {

	/**
	 * Retourne l'index.html de l'application si il est disponible.
	 * Nécessite un chemin relatif vers un fichier index.html,
	 * il peut être définit avec process.env.APP_PATH
	 * @param {*} app 
	 * @param {*} express 
	 */
	staticIndex(app, express) {
		const appPath = (process.env.APP_PATH) ? path.join(__dirname, process.env.APP_PATH) : path.join(__dirname, '/app/');
		console.log('APP_PATH :', appPath)
		app.use(express.static(appPath)); // Chargement de l'index de l'app

		app.use(function (req, res, next) {
			fs.access(appPath, fs.constants.F_OK | fs.constants.W_OK, (err) => {
				if (err) { // Si le chemin vers l'index de l'app n'existe pas
					const message = `${appPath} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`;
					console.error(message);

					if (process.env.NODE_ENV === 'development') {
						res.status(500).send(`<pre translate="no">${message}</pre>`);
					} else {
						res.status(500).send('<pre>index not found</pre>');
					}
				} else {
					res.sendFile('index.html', { root: appPath }); // Envoi du fichier de l'app
				}
			});
		})
	}
};