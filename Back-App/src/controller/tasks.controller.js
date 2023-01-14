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

  async createTask(req, res) {
    try {
      const newTask = await Task.create({
        name: req.body.name,
        done: req.body.done,
        projectId: req.body.projectId,
      });
      res.status(200).json(newTask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteTask(req, res) {
    try {
      const destroyedTask = await Task.destroy({
        where: { id: req.params.id },
      });
      res.status(200).json(destroyedTask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateTask(req, res) {
    try {
      const task = await Task.findOne({
        where: { id: req.params.id },
      });
      //Con el set podemos solo seleccionar algunos campos en vez de todos.
      task.set(req.body);
      await task.save();
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
