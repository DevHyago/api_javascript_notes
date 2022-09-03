const { db } = require('../database/db');
const { Sequelize, DataTypes } = require('sequelize');

const UserModel = db.define('user', {
   id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false
   },
   createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('now')
  },
  updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('now')
  }
});

module.exports = UserModel;