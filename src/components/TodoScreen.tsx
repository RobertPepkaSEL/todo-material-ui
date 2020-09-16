import React, {useState} from 'react';

import {v4 as uuid} from 'uuid';

import Todo from '../models/Todo';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import TodoAppBar from './TodoAppBar';
import TodoList from './TodoList';
import TodoDetails from './TodoDetails';


export interface TodoScreenProps {

}

export default function TodoScreen(props: TodoScreenProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [todos, setTodos] = useState<Todo[]>([
    { id: uuid(), title: 'Example todo 1', contents: null, done: false },
    { id: uuid(), title: 'Example todo 2', contents: null, done: false },
    { id: uuid(), title: 'Example todo 3', contents: null, done: false },
  ]);

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
            <TodoDetails todo={todos[selectedIndex]} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
