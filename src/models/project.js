import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Task } from './task.js';

//Define tablas, 2 propiedadees: 1-Nombre de la tabla, 2: Objeto donde definimos la columnas de la tabla
// definimos el modelo en letra mayuscula
export const Project = sequelize.define(
  'project',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    timestamps: false,
  }
);

//Le decimos que un proyecto tiene muchas tareas, La relaccion enttre tablas las colocamos aqui en el hash many
Project.hasMany(Task, {
  //nombre de la columna
  foreignKey: 'projectId',
  sourceKey: 'id',
});

//le decimos que muchas tareas pueden pertenecer a un solo proyecto.
Task.belongsTo(Project, {
  foreignKey: 'projectId',
  targetId: 'id',
});
