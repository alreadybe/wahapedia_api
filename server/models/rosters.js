const { methods, remotes, observers } = require('./rosters/index');

module.exports = (Rosters) => {
	Rosters.remoteMethodsWhitelist('get', 'post');

	methods(Rosters);
	remotes(Rosters);
	observers(Rosters);
};
