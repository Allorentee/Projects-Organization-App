import express from 'express';
import { route } from './routes/projects.routes.js';

export const app = express();

//Middleware
//permite cada vez que envie un dato json el servidor lo puede interpretar y guardar en un req.body
app.use(express.json());
app.get('/', (_req, res) => {
  res.send('API Express / projects or tasks').end();
});
app.use('/', route);
