import React, {useState} from 'react';

import {v4 as uuid} from 'uuid';
import { makeDefault } from '../common/todoDefaults';

import Todo from '../models/Todo';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import TodoAppBar from './TodoAppBar';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


export interface TodoScreenProps {

}

export default function TodoScreen(props: TodoScreenProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [todos, setTodos] = useState<Todo[]>([
    makeDefault(),
  ]);

  const handleNewTodoRequest = () => {
    const newTodos = [...todos];
    newTodos.push(makeDefault());
    setTodos(newTodos);
    setSelectedIndex(newTodos.length-1);
  };

  const handleTodoChanged = (todo: Todo) => {
    const newTodos = [...todos];
    if (todo.done) {
      newTodos.splice(selectedIndex, 1);
      const maxIndex = newTodos.length - 1;
      if (selectedIndex > maxIndex) {
        setSelectedIndex(maxIndex);
      }
    } else {
      newTodos[selectedIndex] = {...todo};
    }
    setTodos(newTodos);
  };

  return (
    <Container>
      <TodoAppBar 
        onNewTodoRequest={() => handleNewTodoRequest()}
      />
      <Box paddingTop={1}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TodoList
              todos={todos}
              selectedIndex={selectedIndex}
              onIndexChanged={newIndex => setSelectedIndex(newIndex)}
            />
          </Grid>
          <Grid item xs={9}>
            {todos.length > 0 &&
              <TodoForm
                todo={todos[selectedIndex]} 
                onTodoChanged={todo => handleTodoChanged(todo)}
              />
            }
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
