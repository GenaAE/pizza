'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const arrOrder = [
      { product_id: 1, user_id: 2, order_number: 123456 },
      { product_id: 2, user_id: 3, order_number: 123457 },
      { product_id: 3, user_id: 4, order_number: 123458 },
    ];
    const demoOrder = arrOrder.map((order) => ({
      ...order,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Orders', demoOrder);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Orders');
  },
};
