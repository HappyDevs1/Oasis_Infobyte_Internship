import React, { useState } from 'react';

function TodoItem({ todo, index, deleteTodo, updateTodo, completeTodo, isCompleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(index, newText, isCompleted);
    setIsEditing(false);
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.deleted ? 'text-muted' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="form-control"
        />
      ) : (
        <span>
          {todo.text} <small className="text-muted">({todo.date})</small>
          {isCompleted && <small className="text-muted"> (Completed: {todo.completedDate})</small>}
        </span>
      )}
      <div>
        {isEditing ? (
          <button className="btn btn-success btn-sm me-2" onClick={handleSave}>Save</button>
        ) : (
          <>
            {!isCompleted && (
              <button className="btn btn-success btn-sm me-2" onClick={() => completeTodo(index)}>Complete</button>
            )}
            <button className="btn btn-secondary btn-sm me-2" onClick={handleEdit}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(index)}>Delete</button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
