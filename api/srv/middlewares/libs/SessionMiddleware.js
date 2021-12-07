
/**
* Middleware de gestion des sessions utilisateur
* http://expressjs.com/fr/advanced/best-practice-security.html#utilisez-les-cookies-de-mani%C3%A8re-s%C3%A9curis%C3%A9e
*/
module.exports = {

	/**
	* Stocke les données de session dans les cookies du navigateur directement, plus simple à intégrer
	* https://www.npmjs.com/package/cookie-session
	*/
	useCookieSession: (app) => {
		if (process.env.DOMAIN) {
			var cookieSession = require('cookie-session');
			var expireTime = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

			app.set('trust proxy', 1) // trust first proxy
			app.use(cookieSession({
				name: 'SESSION',
				keys: ['key1', 'key2'],
				cookie: {
					secure: true,
					httpOnly: true,
					domain: process.env.DOMAIN,
					expires: expireTime
				},
			}))

		} else {
			throw new Error("DOMAIN env undefined");
		}
	},

	/**
	 * Stocke la session coté serveur et envoi juste l'id de session au client, 
	 * nécessite un magasin en production (Exemple: Redis)
	 * https://www.npmjs.com/package/express-session
	 */
	useExpressSession: (app) => {
		const session = require('express-session');

		var sess = {
			name: 'SESSION',
			secret: process.env.SECRET,
			saveUninitialized: true,
			httpOnly: true,  // dont let browser javascript access cookie ever
			secure: true, // only use cookie over https
			resave: false,
			cookie: {},
		}

		if (app.get('env') === 'production') {
			// const redis = require('redis')
			// let RedisStore = require('connect-redis')(session)
			let redisClient = redis.createClient()

			app.set('trust proxy', 1); // trust first proxy
			sess.cookie.secure = true; // serve secure cookies
			sess.cookie.store = new RedisStore({ client: redisClient });
		}

		app.use(session(sess))

		// Gestionnaire d'erreurs Redis
		app.use((req, res, next) => {
			if (!req.session) {
				return next(new Error('Session undefined'))
			}
			next()
		})
	},
}