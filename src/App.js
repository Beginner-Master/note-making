import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <nav>
            <ul className="nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/new">New Note</Link></li>
            </ul>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<NotesList />} />
            <Route path="/new" element={<NoteForm onSave={() => window.location.href = '/'} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
