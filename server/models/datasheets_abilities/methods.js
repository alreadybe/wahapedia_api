module.exports = (DatasheetsAbilities) => {
	DatasheetsAbilities.get = async () => {
		const allDatasheetAbilities = await DatasheetsAbilities.find();
		return allDatasheetAbilities;
	};

	DatasheetsAbilities.getOne = async (req) => {
		const datasheetAbilitiesId = req.params.id;
		const datasheetAbiilities = DatasheetsAbilities.find({ id: datasheetAbilitiesId });
		return datasheetAbiilities;
	}
};
