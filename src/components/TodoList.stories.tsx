import React, {useState} from 'react';

import { Node } from 'slate';
import { Story, Meta } from '@storybook/react/types-6-0';
import { makeDefault, makeDefaultDetails } from '../common/todoDefaults';

import TodoList, { TodoListProps } from './TodoList';

export default {
  title: 'Features/Todo/TodoList',
  component: TodoList,
  argTypes: {
      
  },
} as Meta;


// NOTE: I intentionally didn't put a fixture in here to handle Slate's changes, I test that in TodoDetailsEditor.stories.tsx
const Template: Story<TodoListProps> = (args) => <TodoList {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  todos: [],
};


export const One = Template.bind({});
One.args = {
  todos: [
    { id: "id1", title: "title1", details: makeDefaultDetails(), done: false },
  ]
};


const numbers = [1,2,3,4,5,6,7,8,9,10] as number[];

export const Many = Template.bind({});
Many.args = {
  todos: numbers.map(itemNumber => {
    return {
      id: `id${itemNumber}`,
      title: `title${itemNumber}`,
      details: makeDefaultDetails(),
      done: false
    }
  }),
};

