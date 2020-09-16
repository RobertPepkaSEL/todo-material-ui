import React, {useState} from 'react';

import { Node } from 'slate';
import { Story, Meta } from '@storybook/react/types-6-0';

import TodoForm, { TodoFormProps } from './TodoForm';

export default {
  title: 'Features/Todo/TodoForm',
  component: TodoForm,
  argTypes: {
      
  },
} as Meta;


// NOTE: I intentionally didn't put a fixture in here to handle Slate's changes, I test that in TodoDetailsEditor.stories.tsx
const Template: Story<TodoFormProps> = (args) => <TodoForm {...args} />;

export const Empty = Template.bind({});
Empty.args = {
};


export const WithEmptyTodo = Template.bind({});
WithEmptyTodo.args = {
    todo: {
        id: "id 1",
        title: "title 1",
        details: [{children: [{text:""}]}],
        done: false,
    }
};


export const WithTextTodo = Template.bind({});
WithTextTodo.args = {
    todo: {
        id: "id 1",
        title: "title 1",
        details: [{children: [{text:"Some Text"}]}],
        done: false,
    }
};

