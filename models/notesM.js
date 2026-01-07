import { nanoid } from "nanoid"

export class Note {
    constructor(ownerUsername, text) {
        this.id = nanoid(4)
        this.ownerUsername = ownerUsername
        this.text = text
        this.createdAt = new Date().toISOString()
    }
    returenObj() {
        return {
            id: this.id,
            ownerUsername: this.ownerUsername,
            text: this.text,
            createdAt: this.createdAt
        }
    }
}