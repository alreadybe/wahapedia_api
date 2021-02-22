const _ = require('lodash');

const remotes = {
	get: {
		description: 'Get all abilities',
		http: { path: '/', verb: 'get' },
		accepts: [],
		returns: { type: 'object', root: true },
	},
};

module.exports = (Strategems) => {
	_.each(remotes, (remote, name) => {
		console.log(`adding strategems.${name}`);
		Strategems.remoteMethod(name, remote);
	});
};
