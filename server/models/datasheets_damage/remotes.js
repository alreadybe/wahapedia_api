const _ = require('lodash');

const remotes = {
	get: {
		description: 'Get all datasheets_damage',
		http: { path: '/', verb: 'get' },
		accepts: [],
		returns: { type: 'object', root: true },
	},
};

module.exports = (DatasheetsDamage) => {
	_.each(remotes, (remote, name) => {
		console.log(`adding datasheets_damage.${name}`);
		DatasheetsDamage.remoteMethod(name, remote);
	});
};
