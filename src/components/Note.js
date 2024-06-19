import React from 'react';
import '../styles/Note.css';

function Note({ note, onDelete, onEdit }) {
  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className="note-actions">
        <button onClick={() => onEdit(note)}>Edit</button>
        <button onClick={() => onDelete(note._id)}>Delete</button>
      </div>
    </div>
  );
}

export default Note;
