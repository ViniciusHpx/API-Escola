/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      nome: 'Vinicius',
      email: 'viniciush@hotmail.com',
      password_hash: await bcryptjs.hash('124567', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Vinicius2',
      email: 'viniciush2@hotmail.com',
      password_hash: await bcryptjs.hash('124567', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ], {});
  },

  // async down() {},
};
