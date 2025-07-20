// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Register from './pages/Register';
import AdminDashboard from './pages/admin/Admin';
import RutaProtegida from './pages/RutaProtegidaAdmin';
import AdminPanel from './pages/Admin-Panel';
import ApiKeyWeb from './pages/ApiKeyWeb';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/api-key-web" element={<ApiKeyWeb />} />
        <Route path="/crear-admin" element={<AdminDashboard />} />


        <Route element={<RutaProtegida />}>
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Route>

      </Routes>
    </Router>
  );
}
