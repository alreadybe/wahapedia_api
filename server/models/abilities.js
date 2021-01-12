
const { methods, remotes, observers } = require('./abilities/index');

module.exports = (Abilities) => {
	
	Abilities.remoteMethodsWhitelist('get');

	methods(Abilities);
	remotes(Abilities);
	observers(Abilities);
};
