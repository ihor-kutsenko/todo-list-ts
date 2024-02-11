import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TodoItem from './Components/TodoItem';
import AddTodoForm from './Components/AddTodoForm';

import { addTodo, deleteTodo } from './todoSlice';
import { RootState } from './store';
import './App.css';

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  // const addTodo = (text: string) => {
  //   const newTodo = { id: Date.now(), text };
  //   setTodos([...todos, newTodo]);
  // };

  // const deleteTodo = (id: number) => {
  //   const newTodos = todos.filter(todo => todo.id !== id);
  //   setTodos(newTodos);
  // };

  return (
    <div className="App">
      <h1>Todo List1</h1>
      <AddTodoForm onAdd={text => dispatch(addTodo(text))} />
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={id => dispatch(deleteTodo(id))}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
