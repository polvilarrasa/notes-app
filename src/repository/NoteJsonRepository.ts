import { Note } from "../types/Note";
import { RequestParamsType } from "../types/RequestParamsType";
import { NoteInterface } from "./NoteInterface";

export class NoteJsonRepository implements NoteInterface {
    basicUrl: string;

    constructor(basicUrl: string) {
        this.basicUrl = basicUrl;
    }

    getNotes(): Promise<Note[]> {
        return this.request(this.basicUrl + "/notes.json", "GET", "")
            .then((notesJson) => notesJson.map((noteJson: any) => {
                const note: Note = {
                    id: noteJson.id,
                    title: noteJson.title,
                    content: noteJson.content,
                    createdAt: new Date(noteJson.createdAt),
                    updatedAt: new Date(noteJson.updatedAt),
                };
                return note;
            })
        );
    }
    getNoteById(id: string): Note | null {
        throw new Error("Method not implemented.");
    }
    createNote(
        title: string,
        content: string,
        createdAt: Date,
        updatedAt: Date
    ): Note {
        throw new Error("Method not implemented.");
    }
    updateNote(
        id: string,
        title: string,
        content: string,
        updatedAt: Date
    ): Note | null {
        throw new Error("Method not implemented.");
    }
    deleteNoteById(id: string): boolean {
        throw new Error("Method not implemented.");
    }

    private async request(url: string, method: string, body: string) {
        const requestParams:RequestParamsType = {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
        };
        if (method !== "GET" && method !== "HEAD") {
            requestParams.body = body;
        }
        return await fetch(url, requestParams)
            .then((response) => response.json());
    }
}