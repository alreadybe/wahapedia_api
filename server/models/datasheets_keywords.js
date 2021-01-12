
const { methods, remotes, observers } = require('./datasheets_keywords/index');

module.exports = (DatasheetsKeywords) => {
	
	DatasheetsKeywords.remoteMethodsWhitelist('get');

	methods(DatasheetsKeywords);
	remotes(DatasheetsKeywords);
	observers(DatasheetsKeywords);
};
