import React from 'react';

import Todo from '../models/Todo';

import TextField from '@material-ui/core/TextField';

export interface TodoDetailsProps {
  todo: Todo;
}

export default function TodoDetails(props: TodoDetailsProps) {
  const { todo } = props;

  return (
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="title" value={todo.title} />
    </form>
  );
}