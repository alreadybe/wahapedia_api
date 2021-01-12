
const { methods, remotes, observers } = require('./datasheets_damage/index');

module.exports = (DatasheetsDamage) => {
	
	DatasheetsDamage.remoteMethodsWhitelist('get');

	methods(DatasheetsDamage);
	remotes(DatasheetsDamage);
	observers(DatasheetsDamage);
};
