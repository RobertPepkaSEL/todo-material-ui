import {v4 as uuid } from 'uuid';
import Todo from '../models/Todo';


export function makeDefaultDetails() {
  return [
    {
      children: [
      { 
        text: '' },
      ],
    },
  ];
}

export function makeDefault() : Todo {
  return {
    id: uuid(),
    title: 'New todo',
    details: makeDefaultDetails(),
    done: false,
  };
}