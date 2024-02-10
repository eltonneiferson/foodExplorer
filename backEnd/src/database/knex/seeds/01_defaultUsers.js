const { hash } = require('bcryptjs')

exports.seed = async function(knex) {
  
  const passwordDefault = "12345"
 
  await knex('users').insert([
    {
      name: 'Elton',
      email: 'eltonneiferson@outlook.com',
      password: await hash(passwordDefault, 8),
      avatar: "",
      is_admin: true,
      status: true
    },
    {
      name: 'User',
      email: 'user@email.com',
      password: await hash(passwordDefault, 8),
      avatar: "",
      is_admin: false,
      status: true
    }
  ])
}