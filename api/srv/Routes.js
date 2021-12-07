var express = require('express');
var router = express.Router();

const HomeController = require('../src/controllers/HomeController');
const TestController = require('../src/controllers/TestController');

/**
 * Emplacement des routes de l'API
 * http://expressjs.com/fr/guide/routing.html#express-router
 * @return {object} express.Router()
 */

router.get('/', HomeController.get);
router.post('/', HomeController.post);

router.get('/post', TestController.get);
router.get('/post/:id', TestController.getId);

router.use((req, res, next) => {
	res.status(404).json({ error: "404 : Not found", status: 404 })
});


module.exports = router;