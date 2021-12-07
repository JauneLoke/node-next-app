require('dotenv').config();
const express = require('express');
const app = express();


// Chargement des middlewares
const appMiddleware = require('./middlewares/AppMiddleware');
app.use(appMiddleware);

// Chargement de Swagger
const swagger = require('./services/apiSchema/Swagger');
swagger.loadUI(app, "/api/docs")

// Chargement des routes /api/...
const routes = require("./routes");
app.use('/api', routes);

// Redirige toutes les autres requêtes que /api dans l'app
const Render = require('./Render');
Render.staticIndex(app, express);

// Chargement des middlewares de gestion d'erreurs
const { handleError } = require('./middlewares/libs/ErrorMiddleware');
app.use((err, req, res, next) => {
	handleError(err, req, res, next);
});

// Ecoute les connexions sur l'hôte et le port spécifié
// http://expressjs.com/fr/api.html#app.listen
app.set('env', (process.env.NODE_ENV === 'development') ? 'development' : 'production');
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
	console.log('API start', "|", `Port:${app.get('port')}`, "|", app.get('env'), "|");
});