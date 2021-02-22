const _ = require('lodash');

const remotes = {
	get: {
		description: 'Get all abilities',
		http: { path: '/', verb: 'get' },
		accepts: [],
		returns: { type: 'object', root: true },
	},
};

module.exports = (DatasheetsKeywords) => {
	_.each(remotes, (remote, name) => {
		console.log(`adding datasheets_keywords.${name}`);
		DatasheetsKeywords.remoteMethod(name, remote);
	});
};
