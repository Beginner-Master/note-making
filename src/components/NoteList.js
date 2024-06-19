import React, { useEffect, useState } from 'react';
import Note from './Note';
import { getNotes, deleteNote } from '../services/noteService';
import '../styles/NoteList.css';

function NoteList({ onEdit }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const data = await getNotes();
      setNotes(data);
    }
    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    await deleteNote(id);
    setNotes(notes.filter(note => note._id !== id));
  };

  return (
    <div className="note-list">
      {notes.map(note => (
        <Note key={note._id} note={note} onDelete={handleDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default NoteList;
