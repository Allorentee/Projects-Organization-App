import { sequelize } from './database/database.js';
import { app } from './app.js';
import http from 'http';

const port = process.env.PORT || 3200;
const server = http.createServer(app);
server.on('listening', () => {
  const addr = server.address();
  if (addr === null) return;
  if (typeof addr === 'string') {
    bind = 'pipe' + addr;
  } else {
    bind =
      addr.address === '::'
        ? `http://localhost:${addr.port}`
        : `port ${addr?.port}`;
  }
  console.log(`Listening ${bind}`);
});

async function main() {
  try {
    await sequelize.sync({ force: true });
    //Este ync tiene varias formas de trabajar,
    console.log('Connection has been established successfully.');
    app.listen(3000);
    console.log('DB -> ' + 'http://localhost:3000');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
main();
