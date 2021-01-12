module.exports = (DatasheetsModels) => {
	DatasheetsModels.get = async () => {
		const allDatasheetModels = await DatasheetsModels.find();
		return allDatasheetModels;
	};

	DatasheetsModels.getOne = async (req) => {
		const datasheetModelId = req.params.id;
		const datasheetModel = DatasheetsModels.find({ id: datasheetModelId });
		return datasheetModel;
	}
};
