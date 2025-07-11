import { useState } from "react";
import useTodoStore from "../store/toolStore";

const AddTodo = () => {
    const [inputValue, setInputValue] = useState('');
    const { addTodo } = useTodoStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addTodo(inputValue.trim());
            setInputValue('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <div className="add-todo-form">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add a new todo..."
                className="todo-input"
            />
            <button onClick={handleSubmit} className="add-btn">
                Add Todo
            </button>
        </div>
    );
};

export default AddTodo;