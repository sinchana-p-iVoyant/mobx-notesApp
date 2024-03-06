import React from "react";
import { createNotesStore } from "./notesStore";
import { useLocalStore } from "mobx-react";

const NotesContext = React.createContext(null)

// eslint-disable-next-line react/prop-types
export const NotesProvider = ({children}) => {
    // const notesStore = createNotesStore()

    // In order for the created object, to be observable, wrap into in useLocalStore().
    const notesStore = useLocalStore(createNotesStore)

    return (
        <NotesContext.Provider value={notesStore}>
            {children}
        </NotesContext.Provider>
    )
}

export const useNotesStore = () => React.useContext(NotesContext)
