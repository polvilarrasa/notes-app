import React from 'react'
import { useState } from 'react'
import { Note } from '../types/Note';

import { Button } from 'primereact/button';
        

export const Home = () => {
    const [notes, setNotes] = useState<Note[]>([
        {
            id: "123456",
            title: 'Note 1',
            content: 'Content 1',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ]);
    return (
        <>
            <Button label="Check" icon="pi pi-check" />
            <h1>Home</h1>
            <p>Notes: {notes.length}</p>
            {notes.map((note, index) => (
                <div key={index}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                </div>
            ))}
        </>
    )
}
