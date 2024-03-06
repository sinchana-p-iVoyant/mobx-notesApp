import { useObserver } from 'mobx-react'
import './App.css'
import NewNoteForm from './NewNoteForm'
import { useNotesStore } from './NotesContext'

function App() {
  const notesStore = useNotesStore()

  return useObserver( () => (
    <>
      <h2>My Notes</h2>
      <ul>
        {notesStore.notes.map(note => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
      <NewNoteForm />
    </>
  )  
  )
}

export default App
