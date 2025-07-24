const Task = require("../model/Task");

const taskController = {}

taskController.createTask = async (req, res) => {

    try {
        const { task, isComplete } = req.body
        const newTask = new Task({ task, isComplete })
        await newTask.save();
        res.status(200).json({ status: 'ok', data: newTask })

    } catch (err) {
        res.status(400).json({ status: 'fall', error: err })
    }

}

taskController.getTask = async (req, res) => {
    try {
        taskList = await Task.find({})
        res.status(200).json({ status: "ok", data: taskList })
    } catch (err) {
        res.status(400).json({ status: 'fall', error: err })
    }
}

taskController.putTask = async (req, res) => {
    try {
        const { task, isComplete } = req.body;
        const updateTask = await task.findById(req.params.id);

        updateTask.task = task;
        updateTask.isComplete = isComplete;

        await updateTask.save();


        res.status(200).json({ status: "ok", data: updateTask })
    } catch (err) {
        res.status(400).json({ status: 'update fall', error: err })
    }
}

taskController.deleteYask = async (req, res) => {

    try {
        const { id } = req.params;
        const task = await task.get(id);
        if (!task) {
            res.status(400).send('id not found');
            return;
        }

        db.delete(id);
    } catch (err) {
        res.status(200).send(`todo id ${id} deleted`);
    }
}


module.exports = taskController