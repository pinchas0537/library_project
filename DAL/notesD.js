import notesDB from "../db/notesDB.js"

export function deleteNotes(id, username) {
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
}

export function listByOwner(username) {
    try {
        const ListOfNotes = notesDB.forEach(element => {
            element.username === username;
        });
        return ListOfNotes;
    } catch (error) {
        console.error(error);
    }
}



export function listNotes(ownerUsername) {
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

export function existsNote(id) {
    try {
        const search = false
        for (let i = 0; i < usersDB.length; i++) {
            if (notesDB[i].id === id) {
                search = true
            }
        }
        return search
    } catch {
        console.error(error)
    }
}