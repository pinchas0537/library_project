import notesDB from "../db/notesDB.js"
export async function deleteNotes(id,username){
    for(let i= 0;i<notesDB.length;i++){
        if(notesDB[i].id===id&&notesDB[i].username===username){
            notesDB.splice(i,1)
        }
    }
}

