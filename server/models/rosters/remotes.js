const _ = require('lodash');

const remotes = {
	get: {
		description: 'Get all rosters',
		http: { path: '/', verb: 'get' },
		accepts: [],
		returns: { type: 'object', root: true },
	},
	post: {
		description: 'Add new rosters',
		http: { path: '/', verb: 'post' },
		accepts: [{ arg: 'req', type: 'object', http: { source: 'req' } }],
		returns: { type: 'object', root: true },
	},
};

module.exports = (Rosters) => {
	_.each(remotes, (remote, name) => {
		console.log(`adding rosters.${name}`);
		Rosters.remoteMethod(name, remote);
	});
};
