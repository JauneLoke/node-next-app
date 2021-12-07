const express = require('express');
const app = express();
const compression = require('compression')
const helmet = require("./libs/HelmetMiddleware");
const sessionMiddleware = require("./libs/SessionMiddleware")
const logsMiddleware = require("./libs/LogsMiddleware")

// Analyse les demandes entrantes avec des charges utiles en JSON
// http://expressjs.com/fr/api.html#express.json
app.use(express.json());

// Analyse le corps de la requête
// http://expressjs.com/fr/api.html#express.urlencoded
app.use(express.urlencoded({ extended: true }));

// Chargement de Helmet
helmet.init(app);

// Middleware de session
sessionMiddleware.useCookieSession(app);

app.use(compression());

// Middleware des logs de requète
app.use(logsMiddleware.requestLog);

module.exports = app;