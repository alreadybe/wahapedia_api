module.exports = (DatasheetsKeywords) => {
	DatasheetsKeywords.get = async () => {
		const allDatasheetKeywords = await DatasheetsKeywords.find();
		return allDatasheetKeywords;
	};

	DatasheetsKeywords.getOne = async (req) => {
		const datasheetKeywordId = req.params.id;
		const datasheetKeyword = DatasheetsKeywords.find({ id: datasheetKeywordId });
		return datasheetKeyword;
	}
};
