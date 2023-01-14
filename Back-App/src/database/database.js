import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
  'postgres://user:Cf5iIXyE8LTMtEeUIoXOq4GmUZY1PW4f@dpg-cf0ua11a6gdm8jq9b420-a.frankfurt-postgres.render.com/proyectsdb',
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: true,
    },
  }
);
