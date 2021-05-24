// Models
const taskModel = require('../models/taskModel');

// get => /api/task
exports.getAllProduct = async (req, res, next) => {
    const task = await taskModel.find();
    res.send(task);
};

// post => /api/task
exports.postNewProducts = async (req, res, next) => {
    let newTask = new taskModel({
        task: req.body.task
    });

    newTask = await newTask.save();
    res.send(newTask);
};

// put => /api/task/:id
exports.updateProduct = async (req, res, next) => {
    const task = await taskModel.findByIdAndUpdate(req.params.id, { task: req.body.task });
    res.send(task);
};

// delete => /api/task/:id
exports.deleteProduct = async (req, res, next) => {
    const task = await taskModel.findByIdAndRemove(req.params.id);
    res.send(task);
};