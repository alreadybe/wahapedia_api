module.exports = (DatasheetsWargear) => {
	DatasheetsWargear.get = async () => {
		const allDatasheetWargear = await DatasheetsWargear.find();
		return allDatasheetWargear;
	};

	DatasheetsWargear.getOne = async (req) => {
		const datasheetWargearId = req.params.id;
		const datasheetWargear = DatasheetsWargear.find({ id: datasheetWargearId });
		return datasheetWargear;
	}
};
