import React, { FC } from 'react';
import { Todo } from '../App';

interface TodoItemProps {
  // todo: { id: number; text: string };
  todo: Todo;
  onDelete: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <li>
      <p>{todo.text}</p>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
