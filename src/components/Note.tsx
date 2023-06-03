import React from 'react'

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Note as NoteType } from '../types/Note';

import "../assets/note.css"
import OptionButton from './OptionButton';

const contentLength:number = 100;

const Note:React.FC<{note:NoteType}> = ({note}) => {
  const onEditButtonClick = () => {
    console.log("Edit button clicked", note.id);
  };

  const onDeleteButtonClick = () => {
    console.log("Delete button clicked", note.id);
  };

  return (
    <Card title={note.title}>
      <div className="grid">
        <div className="col-9">
          {note.content.length > contentLength ? note.content.substring(0, contentLength) + "..." : note.content}
        </div>
        <div className="col-3">
          <OptionButton icon="pi pi-pencil" type="info" action={onEditButtonClick} />
          <OptionButton icon="pi pi-trash" type="danger" action={onDeleteButtonClick} />
        </div>
      </div>
    </Card>
  )
}

export default Note