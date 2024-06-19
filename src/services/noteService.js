import axios from 'axios';

const API_URL = 'http://localhost:5000/api/notes';

// Get all notes
export const getNotes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching notes:', error);
        throw error;
    }
};

// Create a new note
export const createNote = async (noteData) => {
    try {
        const response = await axios.post(API_URL, noteData);
        return response.data;
    } catch (error) {
        console.error('Error creating note:', error);
        throw error;
    }
};

// Update a note
export const updateNote = async (id, noteData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, noteData);
        return response.data;
    } catch (error) {
        console.error('Error updating note:', error);
        throw error;
    }
};

// Delete a note
export const deleteNote = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting note:', error);
        throw error;
    }
};
