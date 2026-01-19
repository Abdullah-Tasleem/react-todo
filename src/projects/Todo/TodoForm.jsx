import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {
  const [tasks, setTasks] = useState({});
  const handleInputChange = (value) => {
    setTasks({ id: value, content: value, checked: false });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(tasks);
    setTasks({ id: "", content: "", checked: false });
  }
  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={tasks.content}
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
