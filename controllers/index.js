const judicialRecords = [
	{
		identificationType: 1,
		identificationNumber: 1023013041,
		description: "Record 1",
		id: 1
	},
	{
		identificationType: 1,
		identificationNumber: 1023013041,
		description: "Record 2",
		id: 2
	},
	{
		identificationType: 1,
		identificationNumber: 1023013043,
		description: "Record 3",
		id: 3
	},
	{
		identificationType: 1,
		identificationNumber: 1023013042,
		description: "Record 4",
		id: 4
	},
	{
		identificationType: 1,
		identificationNumber: 1023013042,
		description: "Record 5",
		id: 5
	}
];

const persons = [
	{
		identificationType: 1,
		identificationNumber: 1023013040,
		id: 1
	},
	{
		identificationType: 1,
		identificationNumber: 1023013041,
		id: 2
	},
	{
		identificationType: 1,
		identificationNumber: 1023013043,
		id: 3
	},
	{
		identificationType: 1,
		identificationNumber: 1023013042,
		id: 4
	},
	{
		identificationType: 1,
		identificationNumber: 1023013044,
		id: 5
	}
];

const identificationTypes = [
	{
		description: "Cedula de Ciudadania",
		value: 1
	},
	{
		description: "Cedula de Extranjeria",
		value: 2
	}
];


const index = (req, res, next) => {
	const exists = persons.find((person) => (person.identificationNumber == req.query.identificationNumber
		&& person.identificationType == req.query.identificationType)) ? true : false;
	res.status(200).json({
		exists
	})
}

const getJudicialRecords = (req, res, next) => {
	const personJudicialRecords = judicialRecords.filter((report) => report.identificationNumber == req.query.identificationNumber
		&& report.identificationType == req.query.identificationType);
	res.status(200).json({
		personJudicialRecords
	})
}

const getScore = (req, res, next) => {
	const score = Math.floor(Math.random() * 100);
	res.status(200).json({
		score
	})
}
const getIdentificationTypes = (req, res, next) => {
	res.status(200).json({
		identificationTypes
	})
}

module.exports = {
	index,
	getJudicialRecords,
	getScore,
	getIdentificationTypes
};