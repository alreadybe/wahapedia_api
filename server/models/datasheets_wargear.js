
const { methods, remotes, observers } = require('./datasheets_wargear/index');

module.exports = (DatasheetsWargear) => {
	
	DatasheetsWargear.remoteMethodsWhitelist('get');

	methods(DatasheetsWargear);
	remotes(DatasheetsWargear);
	observers(DatasheetsWargear);
};
