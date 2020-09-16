import React from 'react';
import Todo from '../models/Todo';
import { Node } from 'slate';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
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

  const handleTodoDone = () => {
    const newTodo = {
      ...todo,
      done: true,
    };
    onTodoChanged(newTodo);
  };

  return (
    <Paper>
      <Box padding={2}>
        <form noValidate autoComplete="off">
          <TextField 
            id="standard-basic"
            label="title"
            value={todo.title}
            onChange={event => handleTitleChanged(event)}
          />
          <Box paddingTop={1} paddingBottom={1}>
          <TodoDetailsEditor 
            details={todo.details}
            onDetailsChanged={value => handleDetailsChanged(value)}
          />
          </Box>
          <Button color="primary" variant="contained" onClick={event => handleTodoDone()} >
            Complete
          </Button>
        </form>
      </Box>
    </Paper>
  );
}