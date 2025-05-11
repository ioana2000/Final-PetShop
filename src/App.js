import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Notes from './pages/Notes';
import Settings from './pages/Settings';
import Calendar from './pages/Calendar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="nav-bar">
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/tasks')}>Tasks</button>
      <button onClick={() => navigate('/notes')}>Notes</button>
      <button onClick={() => navigate('/calendar')} style={{ marginLeft: '10px' }}>Calendar</button>
      <button onClick={() => navigate('/settings')} style={{ marginLeft: '10px' }}>Setări</button>
    </nav>
  );
}

function AppLayout() {
  return (
    <div>
      <Navigation />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Container>
        <AppLayout /> {}
      </Container>
    </Router>
  );
}

export default App;
