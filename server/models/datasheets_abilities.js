
const { methods, remotes, observers } = require('./datasheets_abilities/index');

module.exports = (DatasheetsAbilities) => {
	
	DatasheetsAbilities.remoteMethodsWhitelist('get');

	methods(DatasheetsAbilities);
	remotes(DatasheetsAbilities);
	observers(DatasheetsAbilities);
};
