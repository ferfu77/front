import React from 'react';
import "./styles.css";
import  Home from "./routes/Home";
import  Login from "./routes/Login";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CrearCuenta from "./routes/CrearCuenta";
import RecuperoContrasena from './routes/RecuperoContrasena';
import Dashboard from "./routes/Dashboard";
import  Reclamo from "./routes/Reclamo";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App(){
  return(
    <div className="App">
        
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/crearcuenta" element={<CrearCuenta></CrearCuenta>}></Route>
          <Route path="/recuperocontrasena" element={<RecuperoContrasena></RecuperoContrasena>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/reclamo" element={<Reclamo></Reclamo>}></Route>
        </Routes>
        </Router>
        <Footer />
    </div>
  );

}