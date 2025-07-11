import useTodoStore from "../store/toolStore";
const TodoItem = ({ todo }) => {
  const { removeTodo, toggleTodo } = useTodoStore();

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="checkbox"
        />
        <span className="todo-text">{todo.text}</span>
      </div>
      <button onClick={() => removeTodo(todo.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
