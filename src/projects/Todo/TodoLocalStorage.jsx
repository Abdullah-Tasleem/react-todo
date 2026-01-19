const todosKey = "reactTodo";
export const getLocalStorageTodoData = () => {
  const rawTodos = localStorage.getItem(todosKey);
  return rawTodos ? JSON.parse(rawTodos) : [];
};
export const setLocalStorageTodoData = (inputValue) => {
  return localStorage.setItem(todosKey, JSON.stringify(inputValue));
};
