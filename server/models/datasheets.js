
const { methods, remotes, observers } = require('./datasheets/index');

module.exports = (Datasheets) => {
	
	Datasheets.remoteMethodsWhitelist('get');

	methods(Datasheets);
	remotes(Datasheets);
	observers(Datasheets);
};
