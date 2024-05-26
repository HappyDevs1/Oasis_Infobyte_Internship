import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, updateTodo, completeTodo, isCompleted }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-center text-muted">
          {isCompleted ? "No completed tasks" : "No pending tasks available"}
        </p>
      ) : (
        <ul className="list-group">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              completeTodo={completeTodo}
              isCompleted={isCompleted}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
