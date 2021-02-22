const _ = require('lodash');

const remotes = {
	get: {
		description: 'Get all factions',
		http: { path: '/', verb: 'get' },
		accepts: [],
		returns: { type: 'object', root: true },
	},
};

module.exports = (Factions) => {
	_.each(remotes, (remote, name) => {
		console.log(`adding factions.${name}`);
		Factions.remoteMethod(name, remote);
	});
};
