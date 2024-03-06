import { useState } from 'react'
import { useNotesStore } from './NotesContext'

const NewNoteForm = () => {
    const [noteText, setNoteText] = useState('')
    const notesStore = useNotesStore()

    const handleAddNote = () => {
        notesStore.addNote(noteText)
    }

  return (
    <div>
        <input type='text' value={noteText} onChange={e => setNoteText(e.target.value)}/>
        <button onClick={handleAddNote}>Add Note</button>
    </div>
  )
}

export default NewNoteForm