import * as bcrypt from 'bcrypt';

export const seed = async (knex) => {
  await knex('users').insert([
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@gmail.com',
      username: 'john.doe',
      password_hash: await bcrypt.hash('123', 10),
    },
  ]);
};
