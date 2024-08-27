export default function ToDoListItem() {
    return (
        <li className="list-item">
            <label className="list-item-label">
                <input data-list-item-checkbox type="checkbox" />
                <span data-list-item-text></span>
            </label>
            <button data-button-delete>Delete</button>
        </li>
    )
}