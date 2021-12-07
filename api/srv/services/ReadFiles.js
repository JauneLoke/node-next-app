const fs = require('fs');
const yaml = require('js-yaml');

module.exports = {

	/**
	 * Lit et retourne le contenu d'un fichier yaml selon la spécification 1.2
	 * https://www.npmjs.com/package/js-yaml
	 * @param {*} pathToYamlFile 
	 * @returns 
	 */
	yaml(pathToYamlFile = null) {
		if (pathToYamlFile) {
			try {
				return yaml.load(fs.readFileSync(pathToYamlFile, 'utf8'));
			} catch (e) {
				console.log(e);
				return null;
			}
		}
	}
}