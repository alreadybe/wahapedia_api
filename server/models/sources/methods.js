module.exports = (Sources) => {
	Sources.get = async () => {
		const allSources = await Sources.find();
		return allSources;
	};

	Sources.getOne = async (req) => {
		const sourcesId = req.params.id;
		const source = Sources.find({ id: sourcesId });
		return source;
	}
};
