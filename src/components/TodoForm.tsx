import React from 'react';
import Todo from '../models/Todo';
import { Node} from 'slate';

import TextField from '@material-ui/core/TextField';
import TodoDetailsEditor from './TodoDetailsEditor';

export interface TodoFormProps {
  todo: Todo;
  onTodoChanged: (todo: Todo) => void;
}

export default function TodoForm(props: TodoFormProps) {
  const { todo, onTodoChanged } = props;

  const handleTitleChanged = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    event.preventDefault();
    const title = event.target.value;
    const newTodo = {
      ...todo,
      title,
    };
    onTodoChanged(newTodo);
  }

  const handleDetailsChanged = (details: Node[]) => {
    const newTodo = {
      ...todo,
      details,
    };
    onTodoChanged(newTodo);
  };

  return (
    <form noValidate autoComplete="off">
      <TextField 
        id="standard-basic"
        label="title"
        value={todo.title}
        onChange={event => handleTitleChanged(event)}
      />
      <TodoDetailsEditor 
        details={todo.details}
        onDetailsChanged={value => handleDetailsChanged(value)}
      />
    </form>
  );
}