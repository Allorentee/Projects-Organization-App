import { Router } from 'express';
import { ProjectsController } from '../controller/projects.controller.js';
export const projectsRoutes = Router();
const controller = new ProjectsController();

projectsRoutes.get('/projects', controller.getProjects);
projectsRoutes.post('/projects', controller.createProjects);
//actualizar.
projectsRoutes.patch('/projects', controller.updateProject);
projectsRoutes.put('/projects/:id', controller.putProject);
projectsRoutes.delete('/projects', controller.deleteProject);
projectsRoutes.get('/projects/:id', controller.getProject);
