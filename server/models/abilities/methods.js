module.exports = (Abilities) => {
	Abilities.get = async () => {
		const allAbilities = await Abilities.find();
		return allAbilities;
	};

	Abilities.getOne = async (req) => {
		const abilitiesId = req.params.id;
		const ability = Abilities.find({ id: abilitiesId });
		return ability;
	}
};
