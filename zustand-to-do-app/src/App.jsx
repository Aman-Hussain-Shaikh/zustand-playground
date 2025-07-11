import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <h1 className="app-title">Todo App with Zustand</h1>
        <AddTodo />
        <TodoStats />
        <TodoList />
      </div>

      <style jsx>{`
        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          padding: 30px;
        }

        .app-title {
          text-align: center;
          color: #333;
          margin-bottom: 30px;
          font-size: 2.5rem;
          font-weight: 300;
        }

        .add-todo-form {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
        }

        .todo-input {
          flex: 1;
          padding: 15px;
          border: 2px solid #e1e5e9;
          border-radius: 8px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .todo-input:focus {
          border-color: #667eea;
        }

        .add-btn {
          padding: 15px 25px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .add-btn:hover {
          background: #5a67d8;
        }

        .todo-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .stats-info {
          display: flex;
          gap: 20px;
          font-size: 14px;
          color: #666;
        }

        .clear-btn {
          padding: 8px 16px;
          background: #e53e3e;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .clear-btn:hover {
          background: #c53030;
        }

        .todo-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .todo-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #667eea;
          transition: all 0.3s ease;
        }

        .todo-item:hover {
          background: #e9ecef;
          transform: translateX(5px);
        }

        .todo-item.completed {
          background: #d4edda;
          border-left-color: #28a745;
        }

        .todo-item.completed .todo-text {
          text-decoration: line-through;
          color: #6c757d;
        }

        .todo-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .checkbox {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }

        .todo-text {
          font-size: 16px;
          color: #333;
        }

        .delete-btn {
          padding: 8px 16px;
          background: #dc3545;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .delete-btn:hover {
          background: #c82333;
        }

        .empty-state {
          text-align: center;
          padding: 40px;
          color: #6c757d;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default App;
