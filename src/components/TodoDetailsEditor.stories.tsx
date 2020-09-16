import React, {useState} from 'react';

import { Node } from 'slate';
import { Story, Meta } from '@storybook/react/types-6-0';
import { makeDefaultDetails } from '../common/todoDefaults';

import TodoDetailsEditor, { TodoDetailsEditorProps } from './TodoDetailsEditor';

export default {
  title: 'Features/Todo/TodoDetailsEditor',
  component: TodoDetailsEditor,
  argTypes: {
      
  },
} as Meta;


function Fixture(props: TodoDetailsEditorProps) {
  const { details } = props;
  const [value, setValue] = useState(details);

  return <TodoDetailsEditor {...props} details={value} onDetailsChanged={value => setValue(value)} />
}

const Template: Story<TodoDetailsEditorProps> = (args) => <Fixture {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  details: [

  ]
};


export const Default = Template.bind({});
Default.args = {
  details: makeDefaultDetails(),
};


export const BigText = Template.bind({});
BigText.args = {
  details: [
    {
      children: [
        { text: 'Todo details' },
        { text: 'Todo details 2' },
        { text: 'Todo details 3' },
      ],
    },
  ],
};

