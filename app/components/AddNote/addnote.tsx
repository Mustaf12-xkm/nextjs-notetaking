"use client"
import { useState } from 'react';
const { v4: uuidv4 } = require('uuid');
import { useRouter } from "next/navigation";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useSelector, useDispatch } from 'react-redux';
import { handelModal } from '../features/modalslice';
import DialogTitle from '@mui/material/DialogTitle';
import { addNote } from '../features/addnoteslice';  
export default function FormDialog() {
  const { isOpen } = useSelector((store: any) => store.modal);

  const dispatch = useDispatch();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
 
  const handleClose = () => {
    dispatch(handelModal());
  };
  const handleAddNote = () => {
    if (!title && !description) {
      return
    }
  dispatch(addNote({title, description, id: uuidv4(),date:new Date()}))
    setTitle('');
    setDescription('');
    dispatch(handelModal());
    router.push('/');
  };
  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Add New Note</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Content"
            type="text"
            multiline  
            fullWidth
            rows={6}
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddNote}>Add Note</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}