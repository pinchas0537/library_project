import usersDB from "../db/usersDB.js";

export async function add(user) {
    try {
        usersDB.push(user)
        return { msg: "success" }
    } catch (err) {
        return { err: err.nessage }
    }
}