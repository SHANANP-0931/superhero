import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Grievance from './pages/Grievance';
import Login from './pages/admin/Login'
import Dash from './pages/admin/DashBoard'

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin/dashboard' element={<Dash />} />

      </Routes>
    </Router>
  );
}

export default App;
