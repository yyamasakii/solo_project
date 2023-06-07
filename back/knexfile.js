// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: "pg",
		connection: {
			host: process.env.DB_HOST || "127.0.0.1",
			port: process.env.DB_PORT || 3000,
			database: process.env.DB_NAME || "links",
			user: process.env.DB_USERNAME || "user",
			password: process.env.DB_PASSWORD || "user",
		},
		migrations: {
			tableName: "knex_migration",
			directory: __dirname + "/db/migrations",
		},
		seeds: {
			directory: __dirname + "/db/seeds",
		},
	},

	// staging: {
	//   client: 'postgresql',
	//   connection: {
	//     database: 'my_db',
	//     user:     'username',
	//     password: 'password'
	//   },
	//   pool: {
	//     min: 2,
	//     max: 10
	//   },
	//   migrations: {
	//     tableName: 'knex_migrations'
	//   }
	// },

	production: {
		client: "postgresql",
		connection: {
			database: "my_db",
			user: "username",
			password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},
};
