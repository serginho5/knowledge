const { db } = require('./.env')

module.exports = {
	client: 'postgresql',
	connection: {
		database: 'Knowledge_final',
		user: 'postgres',
		password: '301532'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
