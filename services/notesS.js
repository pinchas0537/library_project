import {add,listByOwner} from "../DAL/notesD.js"
import {Note} from "../models/notesM.js"
import {listByOwner} from "../DAL/notesD.js"

export function listNotes(ownerUsername){

    try{
        if(typeof(ownerUsername)==="string"){
            const listNotes_by_username=listByOwner(ownerUsername)
            return listNotes_by_username
    }else{
        console.log("The ownerUsername not string.")
    }}catch{error}{
        console.error(error)
    }

export function addNote(ownerUsername, text){
    const new_note=new Note(
        ownerUsername,
        text)
    const insert=add(new_note)
    return insert
}