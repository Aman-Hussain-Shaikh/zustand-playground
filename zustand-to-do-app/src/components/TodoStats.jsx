import useTodoStore from "../store/toolStore";

// TodoStats Component
const TodoStats = () => {
  const { todos, clearCompleted } = useTodoStore();

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  return (
    <div className="todo-stats">
      <div className="stats-info">
        <span>Total: {totalTodos}</span>
        <span>Completed: {completedTodos}</span>
        <span>Pending: {pendingTodos}</span>
      </div>
      {completedTodos > 0 && (
        <button onClick={clearCompleted} className="clear-btn">
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default TodoStats;
