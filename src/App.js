import './App.css';
import { useState, useEffect } from 'react';

function Todo({ id, name }) {
  return <p>{name}</p>;
}

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://todo-backend-production-97bd.up.railway.app/todos'
      );
      const fetchedTodos = await response.json();
      setTodos(fetchedTodos);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo app</h1>
        {todos.map((todo, index) => {
          return <Todo key={index} name={todo.name}></Todo>;
        })}
      </header>
    </div>
  );
}

export default App;
