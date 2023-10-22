import { ToDo } from "../models/ToDoModel.js";

const getToDo = async (req, res) => {
    const toDo = await ToDo.find();
    res.send(toDo);
};

const saveToDo = async (req, res) => {
    const { text } = req.body;

    ToDo.create({ text }).then((data) => {
        console.log("Added successfully...");
        console.log(data);
        res.send(data);
    });
};

const updateToDo = async (req, res) => {
    const { _id, text } = req.body;

    ToDo.findByIdAndUpdate(_id, { text })
        .then(() => res.send("Update successfully..."))
        .catch((err) => console.log(err));
};

const deleteToDo = async (req, res) => {
    const { _id } = req.body;

    ToDo.findByIdAndDelete(_id)
        .then(() => res.send("Delete successfully..."))
        .catch((err) => console.log(err));
};

export { getToDo, saveToDo, updateToDo, deleteToDo };
