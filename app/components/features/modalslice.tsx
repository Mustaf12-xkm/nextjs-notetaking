import {createSlice} from "@reduxjs/toolkit"

interface ModalState {
    isOpen: boolean;
  }
const initialState:ModalState={
    isOpen: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState, // Corrected property name
    
    reducers: {
      handelModal: (state) => {
        state.isOpen = !state.isOpen;
      },
    },
  });
export const {handelModal} = modalSlice.actions
  export default modalSlice.reducer;