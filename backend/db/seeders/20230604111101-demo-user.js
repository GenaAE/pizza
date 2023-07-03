'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const password = await bcrypt.hash('12', +process.env.SALT_ROUNDS);
    const demoUsersData = [
      {
        name: 'Админ',
        // tel: 79039033020,
        password,
        telegram: '@user1',
      },
      {
        name: 'Вася',
        // tel: 79039033021,
        password,
        telegram: '@user2',
      },
      {
        name: 'Петя',
        // tel: 79039033022,
        password,
        telegram: '@user3',
      },
      {
        name: 'Саша',
        // tel: 79039033023,
        password,
        telegram: '@user4',
      },
    ];
    const demoUsers = demoUsersData.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', demoUsers);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('Users');
  },
};
