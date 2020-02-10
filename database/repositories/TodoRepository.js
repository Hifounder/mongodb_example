const Todo = require('../models/Todos');

class TodoRepository {
  constructor(model) {
    this.model = model;
  }
  create(name) {
    const newTodo = { name, done: false };
    const todo = new this.model(newTodo);
    return todo.save();
  }
  findAll() {
    return this.model.find();
  }
  findById(id) {
    return this.model.findById(id);
  }
  deleteById(id) {
    return this.model.findByIdAndDelete(id);
  }
  updateById(id, object) {
    const query = { _id: id };
    return this.model.findOneAndUpdate(query, { name: object.name });
  }
}

module.exports = new TodoRepository(Todo);