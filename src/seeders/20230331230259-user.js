'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        phone: '+6622012345',
        name: 'Fong',
        email: 'azul@gmail.com'
      },
      {
        phone: '+6622781301',
        name: 'Daniela',
        email: 'rojo@gmail.com'
      },
      {
        phone: '+6622096541',
        name: 'Ximena',
        email: 'verde@gmail.com'
      },
      {
        phone: '+6622345679',
        name: 'Gus',
        email: 'amarillo@gmail.com'
      },
    ], {})
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
