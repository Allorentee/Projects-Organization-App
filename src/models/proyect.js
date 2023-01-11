import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

//Define tablas, 2 propiedadees: 1-Nombre de la tabla, 2: Objeto donde definimos la columnas de la tabla
sequelize.define(
  'proyect',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  //Opciones de la tabla
  {
    tablename: 'proyects',
    timestamps: true,
  }
);
