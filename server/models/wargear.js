
const { methods, remotes, observers } = require('./wargear/index');

module.exports = (Wargear) => {
	
	Wargear.remoteMethodsWhitelist('get');

	methods(Wargear);
	remotes(Wargear);
	observers(Wargear);
};
