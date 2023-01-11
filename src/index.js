import { sequelize } from './database/database.js';
import { app } from './app.js';
import createDebug from 'debug';
import './models/proyect.js';
const debug = createDebug('SQL');

async function main() {
  try {
    //Este ync tiene varias formas de trabajar,
    await sequelize.sync(true);
    debug('Connection has been established successfully.');
    app.listen(3000);
    debug('DB -> ' + 'http://localhost:3000');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
main();
