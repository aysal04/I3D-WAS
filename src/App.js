import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard.jsx';
import Projects from './Pages/Projects.jsx';
import Models from './Pages/Models.jsx';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import Table from './Components/Mesh.jsx';
import Technicians from './Pages/Technicians.jsx';
import Home from './Pages/Home.jsx';
import Review from './Pages/Review.jsx';
import Help from './Pages/Help.jsx';
import Report from './Components/Report.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/model" element={<Table />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Models />} />
          <Route path="/report" element={<Report />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/technicians" element={<Technicians/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/review" element={<Review/>} />
          <Route path="/help" element={<Help/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;