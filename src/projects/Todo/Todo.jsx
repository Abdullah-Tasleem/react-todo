import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
export const Todo = () => {
  
  const [inputValue, setInputValue] = useState([]);
 
  const handleFormSubmit = (tasks) => {
    // e.preventDefault();
    if (!tasks) return;
    if (inputValue.includes(tasks)) return;
    setInputValue((prev) => [...prev, tasks]);
  };

  //delete handleTodo
  const handleDeleteTodo = (value) => {
    const updatedTodo = inputValue.filter((curTask) => curTask !== value);
    setInputValue(updatedTodo);
  };
  // clear all todos
  const handleClearTodoButton = () => {
    setInputValue([]);
  }
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit}/>
      <section className="myUnOrdList">
        <ul>
          {inputValue.map((curTask, index) => {
            return <TodoList key={index} data={curTask} onHandleDeleteTodo={handleDeleteTodo}/>;
          })}
        </ul>
      </section>
      <section className="clear-btn" onClick={handleClearTodoButton}>
        Clear all
      </section>
    </section>
  );
};
