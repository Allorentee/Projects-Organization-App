import { Router } from 'express';
import { ProjectsController } from '../controller/projects.controller.js';
export const projectsRoutes = Router();
const controller = new ProjectsController();

//Las relacciones tiene mas sentido desde el recurso que parte, importante la posuicion por el orden de cascada
projectsRoutes.get('/projects/:id/tasks', controller.getProjectTask);
projectsRoutes.get('/projects', controller.getProjects);
projectsRoutes.post('/projects', controller.createProjects);
projectsRoutes.patch('/projects', controller.updateProject);
projectsRoutes.put('/projects/:id', controller.putProject);
projectsRoutes.delete('/projects', controller.deleteProject);
projectsRoutes.get('/projects/:id', controller.getProject);
