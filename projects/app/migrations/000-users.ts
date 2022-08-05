export const up = async (knex) => {
  await knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable().unique();
    table.string('username').notNullable().unique();
  });
};

export const down = async (knex) => {
  await knex.schema.dropTable('users');
};
