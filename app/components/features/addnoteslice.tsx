import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Note {
  title: string;
  description: string;
  id: string;
  date:Date
}

interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes: []
};

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action: PayloadAction<String>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
    updateNote: (state, action: PayloadAction<{ id: String; updatedNote: Note }>) => {
      const { id, updatedNote } = action.payload;
      const noteIndex = state.notes.findIndex(note => note.id === id);
      if (noteIndex !== -1) {
        state.notes[noteIndex] = updatedNote;
      }
    },
  },
});

export const {addNote,updateNote,removeNote} = noteSlice.actions
  export default noteSlice.reducer;
