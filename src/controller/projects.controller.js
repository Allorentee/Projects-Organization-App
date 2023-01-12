import { Project } from '../models/project.js';

export class ProjectsController {
  getProjects(req, res) {
    res.send('Getting projects');
  }

  async createProjects(req, res) {
    const { name, priority, description } = req.body;

    const newProject = await Project.create({
      name,
      priority,
      description,
    });

    console.log(newProject);
    res.send('Creando Objeto...');
  }
}
