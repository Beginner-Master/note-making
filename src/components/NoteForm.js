import React, { useState, useEffect } from 'react';
import { createNote, updateNote } from '../services/noteService';
import '../styles/NoteForm.css';

function NoteForm({ noteToEdit, onNoteSaved }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [noteToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const note = { title, content };
    if (noteToEdit) {
      await updateNote(noteToEdit._id, note);
    } else {
      await createNote(note);
    }
    setTitle('');
    setContent('');
    onNoteSaved();
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
      />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Content" 
      ></textarea>
      <button type="submit">{noteToEdit ? 'Update' : 'Add'} Note</button>
    </form>
  );
}

export default NoteForm;
