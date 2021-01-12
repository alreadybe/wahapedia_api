const _ = require('lodash');
const app = require('../../server');

const dbConnect = () =>
	new Promise((resolve, reject) => {
		const Datasheets = app.models.datasheets;
		Datasheets.getDataSource().connector.connect((err, db) => {
			if (err) return reject(err);
			resolve(db);
		});
	});

module.exports = (Datasheets) => {
	Datasheets.get = async (req) => {
		const db = await dbConnect();
		const datasheetCollections = db.collection('datasheets');


		const { query } = req;

		const id = _.get(query, 'id');
		const factionId = _.get(query, 'factionId');
		const role = _.get(query, 'role');
		const transport = _.get(query, 'transport');
		const powerPoints = _.get(query, 'powerPoints');
		const priest = _.get(query, 'priest');
		const psyker = _.get(query, 'psyker');

		const pipeline = [{
			$match: {
				...(id && { id }),
				...(factionId && { faction_id: factionId }),
				...(role && { role }),
				...(transport && { transport }),
				...(powerPoints && { power_points: powerPoints }),
				...(priest && { priest }),
				...(psyker && { psyker }),
			}
		},
		{
			$lookup: {
				from: 'datasheets_models',
				localField: 'id',
				foreignField: 'datasheet_id',
				as: 'models',
			},

		}];

		const datasheets = await datasheetCollections.aggregate(pipeline).toArray();
		return datasheets;
	};
}