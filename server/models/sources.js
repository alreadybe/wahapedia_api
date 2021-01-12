
const { methods, remotes, observers } = require('./sources/index');

module.exports = (Sources) => {
	
	Sources.remoteMethodsWhitelist('get');

	methods(Sources);
	remotes(Sources);
	observers(Sources);
};
