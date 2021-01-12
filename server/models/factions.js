
const { methods, remotes, observers } = require('./factions/index');

module.exports = (Factions) => {
	
	Factions.remoteMethodsWhitelist('get');

	methods(Factions);
	remotes(Factions);
	observers(Factions);
};
