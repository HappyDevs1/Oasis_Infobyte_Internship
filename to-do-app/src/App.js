import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pendingTodos, setPendingTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  // Load todos from localStorage
  useEffect(() => {
    const storedPendingTodos = JSON.parse(localStorage.getItem('pendingTodos')) || [];
    const storedCompletedTodos = JSON.parse(localStorage.getItem('completedTodos')) || [];
    setPendingTodos(storedPendingTodos);
    setCompletedTodos(storedCompletedTodos);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('pendingTodos', JSON.stringify(pendingTodos));
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [pendingTodos, completedTodos]);

  const addTodo = (text) => {
    const date = new Date().toLocaleString();
    setPendingTodos([...pendingTodos, { text, date }]);
  };

  const deleteTodo = (index, isCompleted) => {
    if (isCompleted) {
      const newCompletedTodos = completedTodos.filter((_, i) => i !== index);
      setCompletedTodos(newCompletedTodos);
    } else {
      const newPendingTodos = pendingTodos.filter((_, i) => i !== index);
      setPendingTodos(newPendingTodos);
    }
  };

  const completeTodo = (index) => {
    const newPendingTodos = [...pendingTodos];
    const completedTodo = { ...newPendingTodos[index], completedDate: new Date().toLocaleString() };
    setCompletedTodos([...completedTodos, completedTodo]);
    newPendingTodos.splice(index, 1);
    setPendingTodos(newPendingTodos);
  };

  const updateTodo = (index, newText, isCompleted) => {
    if (isCompleted) {
      const newCompletedTodos = [...completedTodos];
      newCompletedTodos[index].text = newText;
      setCompletedTodos(newCompletedTodos);
    } else {
      const newPendingTodos = [...pendingTodos];
      newPendingTodos[index].text = newText;
      setPendingTodos(newPendingTodos);
    }
  };

  return (
    <div className="App container mt-5">
      <h1 className="text-center mb-4">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <h2>Pending Tasks</h2>
      <TodoList 
        todos={pendingTodos} 
        deleteTodo={(index) => deleteTodo(index, false)} 
        updateTodo={(index, newText) => updateTodo(index, newText, false)} 
        completeTodo={completeTodo} 
        isCompleted={false} 
      />
      <h2 className="mt-4">Completed Tasks</h2>
      <TodoList 
        todos={completedTodos} 
        deleteTodo={(index) => deleteTodo(index, true)} 
        updateTodo={(index, newText) => updateTodo(index, newText, true)} 
        isCompleted={true} 
      />
    </div>
  );
}

export default App;
