import { dbConnect } from './database/db.connect.js';
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

dbConnect();
