/**
 * Helmet vous aide à sécuriser vos applications Express
 * http://expressjs.com/fr/advanced/best-practice-security.html#utilisez-helmet
 * https://www.npmjs.com/package/helmet
 * @param {*} app 
 */
module.exports = {

	init(app) {
		var helmet = require('helmet');

		app.use(helmet(
			{
				contentSecurityPolicy: true,
				dnsPrefetchControl: true,
				expectCt: true,
				frameguard: true,
				hidePoweredBy: true,
				hsts: true,
				ieNoOpen: true,
				noSniff: true,
				permittedCrossDomainPolicies: true,
				referrerPolicy: true,
				xssFilter: true,
			}
		));
	}

}