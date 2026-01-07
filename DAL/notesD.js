import notesDB from "../db/notesDB.js"

export async function deleteNotes(id, username) {
    try {
        for (let i = 0; i < notesDB.length; i++) {
            if (notesDB[i].id === id && notesDB[i].username === username) {
                notesDB.splice(i, 1)
                console.log("Deleted successfully")
            }
        }
        return notesDB
    } catch (error) {
        console.error(error)
    }

export async function listByOwner(username) {
    try {
        const ListOfNotes = notesDB.forEach(element => {
            element.username === username;
        });
        return ListOfNotes;
    } catch (error) {
        console.error(error);
    }
}



export async function listNotes(ownerUsername) {
    try {
        if (typeof (ownerUsername) === String) {
            return ownerUsername
        } else {
            console.log("The ownerUsername not string.")
        }
    } catch { error } {
        console.error(error)
    }
}

export function add(note = {}) {
    try {
        notesDB.push(note)
        return true
    } catch (error) {
        console.error(error)
    }
}