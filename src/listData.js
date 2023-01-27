export default localStorage.toDoStorage !== undefined
  ? JSON.parse(localStorage.toDoStorage)
  : [];
