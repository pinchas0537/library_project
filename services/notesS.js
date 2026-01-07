import { deleteNotes, existsNote, listByOwner } from "../DAL/notesD.js"
import { existsUser } from "../DAL/usersD.js";
export async function listNotes(ownerUsername) {
    try {
        if (typeof (ownerUsername) === String) {
            const listNotes_by_username = listByOwner(ownerUsername)
            return listNotes_by_username
        } else {
            console.log("The ownerUsername not string.")
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
