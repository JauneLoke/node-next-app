const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require("http-proxy-middleware")

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


const apiPaths = {
	'/api': {
		target: 'http://localhost:3080',
		pathRewrite: {
			'^/api': '/api',
		},
		changeOrigin: true
	}
}


app.prepare().then(() => {
	const server = express()

	if (dev) {
		server.use('/api', createProxyMiddleware(apiPaths['/api']));
	}

	server.all('*', (req, res) => {
		return handle(req, res)
	})

	server.listen(port, (err) => {
		if (err) throw err
		console.log('APP start', "|", `Port:${port}`, "|", process.env.NODE_ENV, "|")
	})
}).catch(err => {
	console.error('Error:', err)
})