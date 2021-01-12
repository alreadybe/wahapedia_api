module.exports = (Wargear) => {
	Wargear.get = async () => {
		const allWargear = await Wargear.find();
		return allWargear;
	};

	Wargear.getOne = async (req) => {
		const wargearId = req.params.id;
		const wargear = Wargear.find({ id: wargearId });
		return wargear;
	}
};
