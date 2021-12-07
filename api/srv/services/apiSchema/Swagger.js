const path = require('path');
const express = require("express")
const swaggerUi = require('swagger-ui-express');
const ReadFile = require('../ReadFiles');

/**
 * L'interface utilisateur Swagger permet à l'équipe de développement 
 * de visualiser et d'interagir avec les ressources de l'API.
 * https://swagger.io/docs/specification/about/
 */
module.exports = {

	/**
	 * Ce service permet de servir une documentation d'API générés automatiquement par swagger-ui 
	 * à partir d'express, sur la base d'un swagger.yaml fichier accessible via une route
	 * https://www.npmjs.com/package/swagger-ui-express
	 * @param {*} app
	 * @param {string} routePath default="/api/docs"
	 */
	loadUI(app, routePath = "/api/docs") {
		if (app && routePath) {
			const swaggerSchema = ReadFile.yaml(path.join(__dirname, "/swagger.yaml"));

			app.use(
				routePath,
				express.static('node_modules/swagger-ui-dist/', { index: false }),
				swaggerUi.serve,
				swaggerUi.setup(swaggerSchema)
			);
		}
	}

}