
const { methods, remotes, observers } = require('./strategems/index');

module.exports = (Strategems) => {
	
	Strategems.remoteMethodsWhitelist('get');

	methods(Strategems);
	remotes(Strategems);
	observers(Strategems);
};
