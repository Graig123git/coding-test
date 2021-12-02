/**
 * Server imports
 */
import express from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

// set sever port to process or 8000
const PORT = process.env.PORT || 8000;
const app = express();

//include the routes
var cats = require('./controllers/routes/Cats/cats');
var sharks = require('./controllers/routes/Sharks/sharks');

//register routes with express
app.use('/api/cats', cats);
app.use('/api/sharks', sharks);

/**
 *SSR rendering
 */
app.use('^/$', (req, res, next) => {
	fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
		if (err) {
			console.log(err);
			return res.status(500).send('Opps Something when wrong!');
		}
		return res.send(
			data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)} </div>`)
		);
	});
});

//server static files from build folder
app.use(express.static(path.resolve(__dirname, '..', 'build')));

//launch our app
app.listen(PORT, () => {
	console.log(`App launched on ${PORT}`);
});
