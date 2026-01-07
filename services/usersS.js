import { add, existsUser } from "../DAL/usersD.js";
import usersDB from "../db/usersDB.js";
import { Users } from "../models/usersM.js";

export function login(username, password) {
    try {
        const user = usersDB.find((elemnt) => {
            elemnt.username === username && elemnt.password === password;
        })
        return user
    } catch (err) {
        return { err: err.message }
    }
}

export function register(username, password) {
    if (typeof username !== "string" || username.trim() === "") return false
    if (typeof password !== "string" || password.trim() === "") return false
    const exist = existsUser(username)
    if (exist === true) return false
    const user = new Users(username, password)
    const addUser = add(user)
    return true
}