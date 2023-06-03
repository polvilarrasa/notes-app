import { Note } from "../types/Note";

export interface NoteInterface {
    getNotes(): Promise<Note[]>;
    getNoteById(id: string): Note|null;
    createNote(title: string, content: string, createdAt: Date, updatedAt: Date): Note;
    updateNote(id: string, title: string, content: string, updatedAt: Date): Note|null;
    deleteNoteById(id: string): boolean;
};