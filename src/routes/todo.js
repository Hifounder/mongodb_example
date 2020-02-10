
const TodoRepository = require('../../database/repositories/TodoRepository');
module.exports = (app) => {
    app.get('/', async (_req, res) => {
        TodoRepository
            .findAll()
            .then(todos => res.json(todos))
            .catch(err => console.error(err));
    });
    app.post('/', (req, res) => {
        const { name } = req.body;
        TodoRepository
            .create(name)
            .then(todo => res.json(todo))
            .catch(err => console.error(err));
    });
    app.delete('/:id', (req, res) => {
        const { id } = req.params;
        TodoRepository
            .deleteById(id)
            .then(() => res.status(200).send(`Delete id: ${id} success.`))
            .catch(err => console.error(err));
    });
    app.put('/:id', (req, res) => {
        const { id } = req.params;
        const todo = { name: req.body.name, done: req.body.done };
        TodoRepository
            .updateById(id, todo)
            .then(res.status(200).send([]))
            .catch(err => console.error(err));
    });
};
