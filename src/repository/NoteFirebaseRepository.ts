import { Note } from "../types/Note";
import { RequestParamsType } from "../types/RequestParamsType";
import { NoteInterface } from "./NoteInterface";

export class NoteFirebaseRepository implements NoteInterface {
    basicUrl: string;

    constructor(basicUrl: string) {
        this.basicUrl = basicUrl;
    }

    getNotes(): Promise<Note[]> {
        throw new Error("Method not implemented.");
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