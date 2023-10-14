import { configureStore } from "@reduxjs/toolkit";
import ModalsliceReducer from "./components/features/modalslice";
import noteSlicereducer from "./components/features/addnoteslice"
import  updateNote  from "./components/features/addnoteslice";
import removeNote  from "./components/features/addnoteslice";
export const store = configureStore({
  reducer: {
    modal: ModalsliceReducer,
    data:noteSlicereducer,
    update:updateNote,
    removeNote: removeNote
  }
});
