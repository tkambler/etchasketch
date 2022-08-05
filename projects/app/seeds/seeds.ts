export const seed = async (knex) => {
  await knex('users').insert([
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@gmail.com',
      username: 'john.doe',
    },
  ]);
};
