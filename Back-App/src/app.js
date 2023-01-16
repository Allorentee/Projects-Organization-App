import express from 'express';
import cors from 'cors';
import { corsOptions } from './cors/corsOptions.js';
import { projectsRoutes } from './routes/projects.routes.js';
import { tasksRoutes } from './routes/task.routes.js';
import { setCors } from './cors/setCors.js';

export const app = express();
app.disable('x-powered-by');

app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(setCors);
//Middleware
//permite cada vez que envie un dato json el servidor lo puede interpretar y guardar en un req.body
app.use(express.json());
app.get('/', (_req, res) => {
  res.send('API Express / projects or tasks').end();
});
app.use(projectsRoutes);
app.use(tasksRoutes);
