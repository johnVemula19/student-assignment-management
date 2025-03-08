import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import AssignmentPage from './Pages/AssignmentPage';
import SubmissionForm from './components/SubmissionForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignment/:id" element={<AssignmentPage />} />
        <Route path="/submit" element={<SubmissionForm />} />
      </Routes>
    </Router>
  );
}

export default App;