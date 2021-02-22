const _ = require('lodash');

const remotes = {
	get: {
		description: 'Get all abilities',
		http: { path: '/', verb: 'get' },
		accepts: [],
		returns: { type: 'object', root: true },
	},
};

module.exports = (WargearList) => {
	_.each(remotes, (remote, name) => {
		console.log(`adding wargear_list.${name}`);
		WargearList.remoteMethod(name, remote);
	});
};
