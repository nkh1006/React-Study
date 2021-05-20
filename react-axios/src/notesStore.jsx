import {nanoid} from 'nanoid';

function createNotesStore() {
    return {
        notes: [],
        addNote(text) {
            this.notes.push({
                text,id
            })
        } 
    }
}