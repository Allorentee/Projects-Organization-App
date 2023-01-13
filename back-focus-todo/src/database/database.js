import Sequelize from 'sequelize';

export const sequelize = new Sequelize('proyectdb', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres',
});
