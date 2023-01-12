import { Router } from 'express';
import { ProjectsController } from '../controller/projects.controller.js';
export const route = Router();
const controller = new ProjectsController();

route.get('/projects', controller.getProjects);
route.post('/projects', controller.createProjects);
//actualizar.
route.patch('/projects', controller.updateProject);
route.put('/projects/:id', controller.putProject);
route.delete('/projects', controller.deleteProject);
route.get('/projectos/:id');
