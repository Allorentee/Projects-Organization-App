import { DataTypes } from 'sequelize';
import { sequalize } from '../database/database.js';

sequalize.define(task, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoincrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
    default: false,
  },
  proyectId: {
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
});
