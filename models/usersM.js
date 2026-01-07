import { nanoid } from "nanoid"
import { Note } from "./notesM.js"

export class Users {
    constructor(username, password) {
        this.notes = []
        this.id = nanoid(4)
        this.username = username
        this.password = password
        this.createdAt = new Date().toISOString()
        this.genarateNote()
    }
    returenObj() {
        return {
            id: this.id,
            username: this.username,
            password: this.password,
            createdAt: this.createdAt
        }
    }
    genarateNote(num = 2) {
        for (let i = 0; i < num; i++) {
            const element = new Note (this.username, `Example: `)
            this.notes.push(element)
        }
    }
}