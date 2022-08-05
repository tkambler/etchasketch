export const up = async (knex) => {
  await knex.schema.createTable('whiteboards', function (table) {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('data').notNullable();
    table.integer('drawing_time').notNullable();
    table.string('svg').notNullable();
    table.blob('png').notNullable();
    table.string('created_at').notNullable();
    table
      .integer('user_id')
      .notNullable()
      .references('users.id')
      .onUpdate('RESTRICT')
      .onDelete('CASCADE');
  });
};

export const down = async (knex) => {
  await knex.schema.dropTable('whiteboards');
};
