module.exports = (DatasheetsDamage) => {
	DatasheetsDamage.get = async () => {
		const allDatasheetDamage = await DatasheetsDamage.find();
		return allDatasheetDamage;
	};

	DatasheetsDamage.getOne = async (req) => {
		const datasheetDamageId = req.params.id;
		const datasheetDamage = DatasheetsDamage.find({ id: datasheetDamageId });
		return datasheetDamage;
	}
};
