
const { methods, remotes, observers } = require('./wargear_list/index');

module.exports = (WargearList) => {
	
	WargearList.remoteMethodsWhitelist('get');

	methods(WargearList);
	remotes(WargearList);
	observers(WargearList);
};
