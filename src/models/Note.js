const { db } = require('../database/db');
const { Sequelize, DataTypes } = require('sequelize');

const NoteModel = db.define('note', {
   id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
   },
   title: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   body: {
      type: DataTypes.STRING,
      allowNull: false
   },
   author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {    
         model: 'users',
         key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
   },
   createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('now')
  },
  updatedAt: {
      field: 'updated_at',
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now')
  }
});

module.exports = NoteModel;