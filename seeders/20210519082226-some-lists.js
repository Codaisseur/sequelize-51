'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('todoLists', [
      {
        name: 'Work',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        name: 'Sports',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        name: 'Reading',
        updatedAt: new Date(),
        createdAt: new Date(),
        userId: 2,
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('todoLists', null, {});
  }
};
