import { Router } from 'express';
import { ProjectsController } from '../controller/projects.controller.js';
export const route = Router();
const controller = new ProjectsController();

route.get('/projects', controller.getProjects);
route.post('/projects', controller.createProjects);
//actualizar.
route.put('/projects');
route.delete('/projects');
route.get('/projectos/:id');
