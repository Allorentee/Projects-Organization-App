import { Project } from '../models/project.js';

export class ProjectsController {
  async getProjects(req, res) {
    try {
      const projects = await Project.findAll();
      res.status(200).json(projects);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async createProjects(req, res) {
    const { name, priority, description } = req.body;

    try {
      const newProject = await Project.create({
        name,
        priority,
        description,
      });

      res.status(200).json(newProject);
    } catch (error) {
      res.status(200).json({ message: error.message });
    }
  }
}
