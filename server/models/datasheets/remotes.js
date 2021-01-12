const _ = require('lodash');

const remotes = {
	get: {
		description: 'Get all datasheets',
		http: { path: '/', verb: 'get' },
		accepts: [{ arg: 'req', type: 'object', http: { source: 'req' } }],
		returns: { type: 'object', root: true },
	},
};

module.exports = (Datasheets) => {
	_.each(remotes, (remote, name) => {
		console.log(`adding datasheets.${name}`);
		Datasheets.remoteMethod(name, remote);
	});
};
