import React, {useState} from 'react';

import {v4 as uuid} from 'uuid';
import { makeDefault } from '../common/todoDefaults';

import Todo from '../models/Todo';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import TodoAppBar from './TodoAppBar';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


export interface TodoScreenProps {

}

export default function TodoScreen(props: TodoScreenProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [todos, setTodos] = useState<Todo[]>([
    { id: uuid(), title: 'Example todo 1', details: makeDefault(), done: false },
    { id: uuid(), title: 'Example todo 2', details: makeDefault(), done: false },
    { id: uuid(), title: 'Example todo 3', details: makeDefault(), done: false },
  ]);

  const handleTodoChanged = (todo: Todo) => {
    const newTodos = [...todos];
    newTodos[selectedIndex] = {...todo};
    setTodos(newTodos);
  };

  return (
    <Container>
      <TodoAppBar />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TodoList
            todos={todos}
            selectedIndex={selectedIndex}
            onIndexChanged={newIndex => setSelectedIndex(newIndex)}
          />
        </Grid>
        <Grid item xs={9}>
          <Paper>
            <TodoForm
              todo={todos[selectedIndex]} 
              onTodoChanged={todo => handleTodoChanged(todo)}
              />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
