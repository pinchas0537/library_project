import { nanoid } from "nanoid"

export class Users {
    constructor(username, password) {
        this.id = nanoid(4)
        this.username = username
        this.password = password
        this.createdAt = new Date().toISOString()
    }
    returenObj() {
        return {
            id: this.id,
            username: this.username,
            password: this.password,
            createdAt: this.createdAt
        }
    }
}