import { nanoid } from "nanoid"

export function createNotesStore() {

    // returns object
    return {
        notes: [],
        addNote(text){
            this.notes.push({
                text, id: nanoid()
            })
        },
        removeNote(id) {
            this.notes = this.notes.filter(note => note.id !== id) 
        }
    }
}