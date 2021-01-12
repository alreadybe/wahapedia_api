module.exports = (Strategems) => {
	Strategems.get = async () => {
		const allStrategems = await Strategems.find();
		return allStrategems;
	};

	Strategems.getOne = async (req) => {
		const strategemId = req.params.id;
		const strategema = Strategems.find({ id: strategemId });
		return strategema;
	}

	Strategems.getByFaction = async (req) => {
		const factionId = req.params.faction_id;
		const strategemsByFaction = Strategems.find({ faction_id: factionId });
		return strategemsByFaction;
	};
};
