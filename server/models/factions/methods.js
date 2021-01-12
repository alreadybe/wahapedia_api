module.exports = (Factions) => {
	Factions.get = async () => {
		const allFactions = await Factions.find();
		return allFactions;
	};

	Factions.getOne = async (req) => {
		const factionId = req.params.id;
		const faction = Factions.find({ id: factionId });
		return faction;
	}
};
