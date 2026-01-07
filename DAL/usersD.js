import usersDB from "../db/usersDB.js";

export async function add(user) {
    try {
        usersDB.push(user)
        return { msg: "success" }
    } catch (err) {
        return { err: err.nessage }
    }
}

export async function existsUser(username) {
    try {
        var search = false
        for (let i = 0; i < usersDB.length; i++) {
            if (usersDB[i].username === username) {
                search = true
            }
        }
        return search
    } catch {
        console.error(error)
    }
}

export async function findhByUsername(username) {
    try {
        var search_user = true
        for (let i = 0; i < usersDB.length; i++) {
            if (usersDB[i].username === username) {
                search_user = usersDB[i]
            }
        }
        if (search_user === true) {
            console.log("User not found")
        }
        else {
            console.log(search_user)
        }
    } catch {
        console.error(error)
    }
}