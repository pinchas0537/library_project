import { deleteNotes, existsNote, add, listByOwner } from "../DAL/notesD.js"
import { Note } from "../models/notesM.js"
import { existsUser } from "../DAL/usersD.js";

export function listNotes(ownerUsername) {
    try {
        if (typeof (ownerUsername) === "string") {
            const listNotes_by_username = listByOwner(ownerUsername)
            return listNotes_by_username
        } else {
            console.log("The ownerUsername not string.")
            return false
        }
    } catch { error } {
        console.error(error)
    }
}

export function deleteNote(ownerUsername, noteId) {
    try {
        if (existsUser(ownerUsername) && existsNote(noteId)) {
            deleteNotes(ownerUsername, noteId)
            return true
        }
        return false
    } catch (err) {
        console.log(err)
    }
}

export function addNote(ownerUsername, text) {
    const new_note = new Note(
        ownerUsername,
        text)
    const insert = add(new_note)
    return insert
}