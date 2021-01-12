module.exports = (WargearList) => {
	WargearList.get = async () => {
		const allWargearList = await WargearList.find();
		return allWargearList;
	};

	WargearList.getOne = async (req) => {
		const wargearListId = req.params.id;
		const wargearList = WargearList.find({ id: wargearListId });
		return wargearList;
	}
};
 