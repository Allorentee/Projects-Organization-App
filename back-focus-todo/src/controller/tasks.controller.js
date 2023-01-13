import { Task } from '../models/task.js';

export class tasksController {
  async getAll(req, res) {
    try {
      const tasks = await Task.findAll();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getOne(req, res) {
    const task = await Task.findByPk(req.params.id);
    res.status(200).json(task);
    try {
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async postTask(req, res) {
    try {
      const newTask = Task.create(req.body);
      res.status(200).json(newTask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteTask(req, res) {
    try {
      await Task.destroy({ where: { id: req.params.id } });
      res.status(204);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateTask(req, res) {
    try {
      const task = await Task.update(req.body, {
        where: { id: req.params.id },
      });

      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
