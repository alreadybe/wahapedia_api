
const { methods, remotes, observers } = require('./datasheets_options/index');

module.exports = (DatasheetsOptions) => {
	
	DatasheetsOptions.remoteMethodsWhitelist('get');

	methods(DatasheetsOptions);
	remotes(DatasheetsOptions);
	observers(DatasheetsOptions);
};
