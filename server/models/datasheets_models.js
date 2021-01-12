
const { methods, remotes, observers } = require('./datasheets_models/index');

module.exports = (DatasheetsModels) => {
	
	DatasheetsModels.remoteMethodsWhitelist('get');

	methods(DatasheetsModels);
	remotes(DatasheetsModels);
	observers(DatasheetsModels);
};
