import React from 'react';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';

import Todo from '../models/Todo';

export interface TodoListProps {
  selectedIndex: number;
  todos: Todo[];
  onIndexChanged: (newIndex: number) => void;
}

export default function TodoList(props: TodoListProps) {
  const {selectedIndex, todos, onIndexChanged} = props;

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    event.preventDefault();
    onIndexChanged(index);
  }

  if (todos.length === 0) {
    return (
      <Paper>
        <Box padding={1}>
          <i>No todos! Add a new todo to get started.</i>
        </Box>
      </Paper>
    );
  }

  return (
    <Paper>
      <Box padding={1}>
        <List component="nav">
          {todos.map((todo, index) => (
            <ListItem
              key={todo.id}
              button
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              {todo.title}
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  )
}
