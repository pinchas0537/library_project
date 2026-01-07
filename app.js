import readlineSync from 'readline-sync';
import { register, login } from './services/usersS.js';
import { addNote, deleteNote, listNotes } from './services/notesS.js';

let connected = true
let islogin = false

while (connected) {
    console.log(`
Register = 1
Login = 2
Exit = 3
        `);
    const click = readlineSync.question(``)
    switch (click) {
        case '1':
            const username = readlineSync.question(`enter user name`)
            const new_password = readlineSync.question(`enter user password`)
            const new_user = register(username, new_password)
            if (new_user) {
                console.log("success");
                break;
            }
            console.log("not success")
            break;

        case '2':
            const name = readlineSync.question(`enter user name`)
            const password = readlineSync.question(`enter user password`)
            const user = login(name, password)
            if (user.err === undefined) {
                connected = false
                islogin = true
                break;
            }
            console.log("not found")
            break;
        case '3':
            connected = false
            break;
        default:
            console.log(`Type a valid value between 1 and 3.`);
    }
}


while (islogin) {
    console.log(`
Add note = 1
List notes = 2
Delete note = 3
Logout & Exit = 4
        `);
    const click = readlineSync.question(``)
    switch (click) {
        case '1':
            const new_username = readlineSync.question(`enter user name`)
            const new_text = readlineSync.question(`enter user password`)
            const new_note = addNote(new_username, new_text)
            if (new_note === undefined) {
                console.log("not success")
                break;
            }
            else {
                console.log("success")
                break;
            }
        case '2':
            const name = readlineSync.question(`enter user name`)
            const note = listNotes(name)
            if (note) {
                console.log(note)
                break;
            } else {
                console.log("not found user")
                break;
            }

        case '3':
            const username = readlineSync.question(`enter user name`)
            const note_id = readlineSync.question(`enter user not id`)
            const delete_note = deleteNote(username, note_id)
            if (delete_note) {
                console.log("success")
                break;
            }
            console.log("not success")
            break;
        case '4':
            islogin = false
            break;
        default:
            console.log(`Type a valid value between 1 and 4.`);
    }
}
