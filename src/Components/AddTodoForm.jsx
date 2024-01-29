import React, { useState } from 'react';

const AddTodoForm = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddClick = () => {
    onAdd(newTodo);
    setNewTodo('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New todo"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default AddTodoForm;
