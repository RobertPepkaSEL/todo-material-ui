import React, { useState, useMemo } from 'react';
import { Node, createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';


export interface TodoDetailsEditorProps {
  details: any;
  onDetailsChanged: (details: Node[]) => void;
}

export default function TodoDetailsEditor(props: TodoDetailsEditorProps) {
  const { details, onDetailsChanged } = props;
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const handleChange = (value: Node[]) => {
    onDetailsChanged(value);
  };

  return (
    <Slate editor={editor} value={details} onChange={value => handleChange(value)}>
      <Editable placeholder="Enter some plain text..." />
    </Slate>
  )
}
