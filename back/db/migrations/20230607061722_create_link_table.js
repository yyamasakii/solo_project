/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("link", function (table) {
		table.increments("id").primary();
		table.string("category", 30);
		table.string("title", 150);
		table.string("description", 300);
		table.string("link", 300);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("link");
};
