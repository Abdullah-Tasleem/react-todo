import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {
  const [tasks, setTasks] = useState("");
  const handleInputChange = (value) => {
    setTasks(value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(tasks);
    setTasks("");
  }
  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={tasks}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
