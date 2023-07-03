'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {}
  }
  Admin.init(
    {
      name: DataTypes.TEXT,
      last_name: DataTypes.TEXT,
      tel: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
      password: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Admin',
    }
  );
  return Admin;
};
