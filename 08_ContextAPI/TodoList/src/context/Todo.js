import { useContext } from "react";
import { ToDoContext } from "./TodoContext";

export const useTodo = ()=> useContext(ToDoContext)