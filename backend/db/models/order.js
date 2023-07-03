'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate() {}
    // static associate({ Product_Card, User }) {
    //   this.hasMany(Product_Card, { foreignKey: 'product_id' });
    //   this.belongsTo(User, { foreignKey: 'id' });
  }
  Order.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
      },
      user_id: {
        // references: {
        //   model: 'Users',
        //   key: 'id',
        // },
        // onDelete: 'CASCADE',
        type: DataTypes.INTEGER,
      },
      order_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
