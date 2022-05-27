import { Router } from "express";
import { Todo } from "../models/todo";

let todos: Todo[] = [
  {
    id: "1",
    text: "Test",
  },
];

type RequestBody = {
  text: string;
};

type RequestParams = {
  todoId: string;
};
const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const reqBody: RequestBody = req.body;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: reqBody.text,
  };
  todos.push(newTodo);
  return res.status(201).json({ message: "Todo added!", todo: newTodo });
});

router.put("/todo/:todoId", (req, res, next) => {
  const reqParams: RequestParams = req.params;
  const tId = reqParams.todoId;
  const todoIndex = todos.findIndex((todo) => {
    todo.id === tId;
  });
  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo with that id not found!" });
  } else {
    todos[todoIndex] = {
      id: todos[todoIndex].id,
      text: req.body.text,
    };
    return res.status(200).json({ message: "Todo updated succesfully!" });
  }
});

router.delete("/todo/:todoId", (req, res, next) => {
  const reqParams: RequestParams = req.params;
  const tId = reqParams.todoId;
  todos = todos.filter((todo) => {
    todo.id !== tId;
  });
  res.status(200).json({ message: `Deleted todo with id : ${tId}` });
});
export default router;
