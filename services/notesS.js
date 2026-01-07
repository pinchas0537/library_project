import {listByOwner} from "../DAL/notesD.js"
export async function listNotes(ownerUsername){
    try{
        if(typeof(ownerUsername)===String){
            const listNotes_by_username=listByOwner(ownerUsername)
            return listNotes_by_username
    }else{
        console.log("The ownerUsername not string.")
    }}catch{error}{
        console.error(error)
    }
}