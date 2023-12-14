import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard.jsx';
import Projects from './Pages/Projects.jsx';
import Model from './Pages/Model.jsx';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />}/>
          <Route path="/project/:id" element={<Model />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
