import React from 'react'
import { useState } from 'react'
import { Note as NoteType } from '../types/Note';
import Note from './Note';
import { ListBox } from 'primereact/listbox';
import { NoteJsonRepository } from '../repository/NoteJsonRepository';
import { NoteInterface } from '../repository/NoteInterface';

export const Home = () => {
    let noteRepository: NoteInterface;
    noteRepository = new NoteJsonRepository("http://localhost:3000");

    const [notes, setNotes] = useState<NoteType[]>(
        noteRepository.getNotes()
    );

    const noteTemplate = (option: NoteType) => {
        return (
            <Note note={option} />
        );
    };

    return (
        <>
            <h1>Home</h1>
            <ListBox filter filterBy="title,content" options={notes} optionLabel="name" 
                itemTemplate={noteTemplate} className="w-full md:w-14rem" listStyle={{ maxHeight: '250px' }} />
        </>
    )
}
