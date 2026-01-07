import usersDB from "../db/usersDB.js";
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