const _ = require('lodash');

const remotes = {
	get: {
		description: 'Get all datasheets_abilities',
		http: { path: '/', verb: 'get' },
		accepts: [{ arg: 'ctx', type: 'object', http: { source: 'context' } }],
		returns: { type: 'object', root: true },
	},
};

module.exports = (DatasheetsAbilities) => {
	_.each(remotes, (remote, name) => {
		console.log(`adding datasheets_abilities.${name}`);
		DatasheetsAbilities.remoteMethod(name, remote);
	});
};