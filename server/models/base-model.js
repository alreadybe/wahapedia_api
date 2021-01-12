module.exports = function base(BaseModel) {
	BaseModel.remoteMethodsWhitelist = function whitelist(...remoteMethods) {
		this.sharedClass.methods().forEach((method) => {
			if (remoteMethods.indexOf(method.name) < 0) {
				this.disableRemoteMethodByName(method.isStatic ? method.name : `prototype.${method.name}`);
			}
		});
	};

};
