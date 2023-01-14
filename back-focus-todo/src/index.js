import { sequelize } from './database/database.js';
import { app } from './app.js';

async function main() {
  try {
    await sequelize.sync({ force: false });
    //Este ync tiene varias formas de trabajar,
    console.log('Connection has been established successfully.');
    app.listen(3000);
    console.log('DB -> ' + 'http://localhost:3000');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
main();
