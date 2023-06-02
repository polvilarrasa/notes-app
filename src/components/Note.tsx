import React from 'react'

import { Card } from 'primereact/card';
import { Note as NoteType } from '../types/Note';

import "../assets/note.css"

const Note:React.FC<{note:NoteType}> = ({note}) => {
  return (
    <Card title={note.title}>
        {note.content}
    </Card>
  )
}

export default Note