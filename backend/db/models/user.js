'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate() {
      // static associate({ Order }) {
      //   this.hasMany(Order, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      tel: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      telegram: {
        type: DataTypes.TEXT,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
