export default function ToDoForm() {
    return (
        <form id="new-todo-form">
            <label htmlFor="todo-input">New Todo</label>
            <input type="text" id="todo-input" />
            <button type="submit">Add Todo</button>
        </form>
    )
}