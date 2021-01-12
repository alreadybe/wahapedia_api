module.exports = (DatasheetsOptions) => {
	DatasheetsOptions.get = async () => {
		const allDatasheetOptions = await DatasheetsOptions.find();
		return allDatasheetOptions;
	};

	DatasheetsOptions.getOne = async (req) => {
		const datasheetOptionsId = req.param.id;
		const datasheetOptions = DatasheetsOptions.find({ id: datasheetOptionsId });
		return datasheetOptions;
	}
};
