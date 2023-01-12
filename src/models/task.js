import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Task = sequelize.define(
  'task',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultvalue: false,
    },
  },
  {
    tablename: 'tasks',
  }
);
