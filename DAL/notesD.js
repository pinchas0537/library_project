import notesDB from "../db/notesDB.js";
import usersDB from "../db/usersDB.js";

export async function deleteNotes(id, username) {
    try {
        for (let i = 0; i < notesDB.length; i++) {
            if (notesDB[i].id === id && notesDB[i].username === username) {
                notesDB.splice(i, 1)
                console.log("Deleted successfully")
            }
        }
        return notesDB
    }
    catch {
        console.error(error);

    }
}

export async function add(user) {
    try {
        usersDB.push(user)
        return { msg: "success" }
    } catch (err) {
        return { err: err.nessage }
    }
}