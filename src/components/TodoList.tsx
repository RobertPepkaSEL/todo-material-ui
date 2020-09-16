import React from 'react';

import List from '@material-ui/core/List';
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

  return (
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
  )
}
