import { create } from "zustand";

const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (todo) => set((state) => ({
        todos: [...state.todos, {
            id: Date.now(),
            text: todo,
            completed: false
        }]
    })),

    removeTodo: (id) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
    })),

    toggleTodo: (id) => set((state) => ({
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    })),

    clearCompleted: () => set((state) => ({
        todos: state.todos.filter(todo => !todo.completed)
    }))


}))

export default useTodoStore;