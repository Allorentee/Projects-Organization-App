import { Project } from '../models/project.js';
import { Task } from '../models/task.js';

export class ProjectsController {
  async getProjects(req, res) {
    try {
      const projects = await Project.findAll();
      res.status(200).json(projects);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getProject(req, res) {
    try {
      const project = await Project.findOne({ where: { id: req.params.id } });
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ message: error.message });
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

  async updateProject(req, res) {
    try {
      const updatedProject = await Project.update(req.body, {
        where: {
          id: 3,
        },
      });
      res.status(200).json(updatedProject);
    } catch (error) {
      res.status(500).json({ mensage: error.mensage });
    }
  }

  async deleteProject(req, res) {
    try {
      const dataDeleted = await Project.destroy({
        where: {
          id: req.body.id,
        },
      });
      res.status(200).json(dataDeleted);
    } catch (error) {
      res.status(500).json({ mensage: error.mensage });
    }
  }

  async putProject(req, res) {
    try {
      const project = await Project.findByPk(req.params.id);
      project.name = 'NodeJs';
      project.priority = 2;
      await project.save();
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getProjectTask(req, res) {
    try {
      const { id } = req.params;
      const projectTask = await Task.findAll({ where: { projectId: id } });
      res.status(200).json(projectTask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
