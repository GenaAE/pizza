'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Card extends Model {
    static associate() {
      // static associate({ Order }) {
      //   this.hasOne(Order, { foreignKey: 'product_id' });
    }
  }
  Product_Card.init(
    {
      path: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      product_category: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      product_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      composition: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      onlyValuesOfDishues: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      forBasket: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Product_Card',
    }
  );
  return Product_Card;
};
