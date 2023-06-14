import { FC, useState } from "react";
import { Todo } from "../data-types";

interface Props {
  todos: Todo[];
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
  setToggle: React.Dispatch<React.SetStateAction<Boolean>>;
  setTodo: React.Dispatch<React.SetStateAction<Todo>>;
  setId: React.Dispatch<React.SetStateAction<number | undefined | null>>;
}

const TodoList: FC<Props> = (props) => {
  const filterTodo = (id: number | undefined | null) => {
    props.setList(props.todos.filter((elem) => elem.id !== id));
  };

  const editTodo = (elem: Todo) => {
    props.setToggle(true);
    props.setTodo(elem);
    props.setId(elem.id);
  };

  const handleClick = (val: Todo) => {
    var arr: any[];
    if (val.isDone === false) {
      const isClicked = { id: val.id, todo: val.todo, isDone: true };
      arr = props.todos.map((elem) => {
        return elem.id === val.id ? isClicked : elem;
      });
      props.setList(arr);
    }
  };
  return (
    <>
      {props.todos.length > 0 &&
        props.todos.map((elem) => {
          return (
            <div key={elem.id}>
              <h2
                className={`${elem.isDone ? "checked" : ""}`}
                onClick={() => handleClick(elem)}
              >
                {elem.todo}
              </h2>
              <button onClick={() => filterTodo(elem.id)}>Delete</button>
              <button onClick={() => editTodo(elem)}>Edit</button>
            </div>
          );
        })}
    </>
  );
};

export default TodoList;
