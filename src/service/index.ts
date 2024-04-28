import axios from "axios";
import { TodoType } from "../types";

const fetchTodos = (): Promise<TodoType[]> =>
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.data);

export { fetchTodos };
