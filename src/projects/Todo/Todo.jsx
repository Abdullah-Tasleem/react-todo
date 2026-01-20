import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";

export const Todo = () => {
  const [inputValue, setInputValue] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (tasks) => {
    const { id, content, checked } = tasks;
    // e.pre ventDefault();
    if (!content) return;
    // if (inputValue.includes(tasks)) return;
    const ifTodoContentMatched = inputValue.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;
    setInputValue((prev) => [{ id, content, checked } , ...prev]);
  };

  // add data to local storage
  setLocalStorageTodoData(inputValue);

  //delete handleTodo
  const handleDeleteTodo = (value) => {
    const updatedTodo = inputValue.filter(
      (curTask) => curTask.content !== value
    );
    setInputValue(updatedTodo);
  };
  // clear all todos
  const handleClearTodoButton = () => {
    setInputValue([]);
  };
 
  // check todo
  const handleCheckTodo = (content) => {
    const updatedTask = inputValue.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setInputValue(updatedTask);
  };
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {inputValue.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckTodo={handleCheckTodo}
              />
            );
          })}
        </ul>
      </section>
      <section className="clear-btn" onClick={handleClearTodoButton}>
        Clear all
      </section>
    </section>
  );
};
