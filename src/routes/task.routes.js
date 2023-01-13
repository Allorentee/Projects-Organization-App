import { Router } from 'express';
import { tasksController } from '../controller/tasks.controller.js';

export const tasksRoutes = Router();
const controller = new tasksController();

tasksRoutes.get('/tasks', controller.getAll);
tasksRoutes.post('/tasks', controller.postTask);
tasksRoutes.patch('/tasks/:id', controller.updateTask);
tasksRoutes.delete('/tasks/:id', controller.deleteTask);
tasksRoutes.get('/tasks/:id', controller.getOne);
