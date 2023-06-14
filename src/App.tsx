import { FC, useState } from "react";
import TodoList from "./components/TodoList";
import { Todo } from "./data-types";
import "./App.css";

const App: FC = () => {
  const [todo, setTodo] = useState<Todo>({ id: null, todo: "", isDone: false });
  const [list, setList] = useState<Todo[]>([]);
  const [toggle, setToggle] = useState<Boolean>(false);
  const [id, setId] = useState<number | undefined | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo({ id: list.length, todo: e.target.value, isDone: false });
  };
  const submit = (): void => {
    if (!todo.todo) {
      alert("Please enter something");
    } else {
      if (!toggle) {
        setList([...list, todo]);
        setTodo({ id: null, todo: "", isDone: false });
      } else {
        const updatedlist = list.map((val) => (val.id === id ? todo : val));
        setList(updatedlist);
      }
    }
  };

  return (
    <>
      <h1>CRUD OPERATION</h1>
      <input type="text" value={todo.todo} onChange={handleChange} />
      <button className="button" onClick={submit}>
        {!toggle ? "Add" : "Update"}
      </button>

      <TodoList
        todos={list}
        setList={setList}
        setToggle={setToggle}
        setTodo={setTodo}
        setId={setId}
      />
    </>
  );
};

export default App;
