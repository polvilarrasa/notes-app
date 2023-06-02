import { Note } from "../types/Note";
import { NoteInterface } from "./NoteInterface";

export class NoteJsonRepository implements NoteInterface {
    basicUrl: string;

    constructor(basicUrl: string) {
        this.basicUrl = basicUrl;
    }

    getNotes(): Note[] {
        let res = this.request(this.basicUrl + "/notes", "GET", "");
        console.log(res);
        return [];
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
        return await fetch(url, {
            method: method,
            body: body,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .catch((error) => null);
    }
}