module.exports = (Rosters) => {
	Rosters.get = async () => {
		const allRosters = await Rosters.find();
		return allRosters;
	};

	Rosters.post = async (req) => {
		const roster = req.body;
		await Rosters.create(roster);

		return roster;
	};
};
