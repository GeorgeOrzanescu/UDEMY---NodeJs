"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [
    {
        id: "1",
        text: "Test",
    },
];
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
    const reqBody = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: reqBody.text,
    };
    todos.push(newTodo);
    return res.status(201).json({ message: "Todo added!", todo: newTodo });
});
router.put("/todo/:todoId", (req, res, next) => {
    const reqParams = req.params;
    const tId = reqParams.todoId;
    const todoIndex = todos.findIndex((todo) => {
        todo.id === tId;
    });
    if (todoIndex === -1) {
        return res.status(404).json({ message: "Todo with that id not found!" });
    }
    else {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: req.body.text,
        };
        return res.status(200).json({ message: "Todo updated succesfully!" });
    }
});
router.delete("/todo/:todoId", (req, res, next) => {
    const reqParams = req.params;
    const tId = reqParams.todoId;
    todos = todos.filter((todo) => {
        todo.id !== tId;
    });
    res.status(200).json({ message: `Deleted todo with id : ${tId}` });
});
exports.default = router;
