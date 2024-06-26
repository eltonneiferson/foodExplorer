const { hash } = require('bcryptjs')

exports.seed = async function(knex) {
  
  const passwordDefault = "123456"
 
  await knex('users').insert([
    {
      name: 'Admin',
      email: 'admin@foodexplorer.com',
      password: await hash(passwordDefault, 8),
      avatar: "",
      is_admin: true,
    },
    {
      name: 'User',
      email: 'user@foodexplorer.com',
      password: await hash(passwordDefault, 8),
      avatar: "",
      is_admin: false,
    }
  ])
}