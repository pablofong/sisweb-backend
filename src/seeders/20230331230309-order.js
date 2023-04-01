'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        number: '12345',
        date: new Date(),
        status: 'Delivered'
      },
      {
        number: '12346',
        date: new Date(),
        status: 'Cancelled'
      },
      {
        number: '12347',
        date: new Date(),
        status: 'Cancelled'
      },
      {
        number: '12348',
        date: new Date(),
        status: 'En Route'
      },
    ], {})
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
