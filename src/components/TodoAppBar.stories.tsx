import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import TodoAppBar, { TodoAppBarProps } from './TodoAppBar';

export default {
  title: 'Features/Todo/TodoAppBar',
  component: TodoAppBar,
  argTypes: {
      
  },
} as Meta;

const Template: Story<TodoAppBarProps> = (args) => <TodoAppBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
