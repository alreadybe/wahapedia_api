const _ = require('lodash');

const remotes = {
	get: {
		description: 'Get all abilities',
		http: { path: '/', verb: 'get' },
		accepts: [],
		returns: { type: 'object', root: true },
	},
};

module.exports = (Sources) => {
	_.each(remotes, (remote, name) => {
		console.log(`adding sources.${name}`);
		Sources.remoteMethod(name, remote);
	});
};
