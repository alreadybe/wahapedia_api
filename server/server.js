const loopback = require('loopback');
const boot = require('loopback-boot');
const bodyParser = require('body-parser');

const app = loopback();

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));

app.start = () => app.listen(async () => {
	app.emit('started');
	const baseUrl = app.get('url').replace(/\/$/, '');
	console.log('Web server listening at: %s', baseUrl);
	if (app.get('loopback-component-explorer')) {
		const explorerPath = app.get('loopback-component-explorer').mountPath;
		console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
	}
});

boot(app, __dirname, (err) => {
	if (err) throw err;
	// start the server if `$ node server.js`
	if (require.main === module) app.start();
});

module.exports = app;
