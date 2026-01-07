import { questionInt } from "readline-sync";

export function menu(){
    console.log("1 - login.")
    console.log("2 - enrollment.")
    console.log("3 - Add a note.")
    console.log("4 - List of notes.")
    console.log("5 - Deleting a note.")
    console.log("5 - Exit.")
    const choice = questionInt("Enter your choice: ")
    switch(choice){
        case 1: return 1;
        case 2: return 2;
        case 3: return 3;
        case 4: return 4;
        case 5: return 5;
        case 6: return 6;
        default: return menu();
    }
}