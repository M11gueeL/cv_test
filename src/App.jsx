import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './Layouts/Layout'; 
import Home from './Home/Home.jsx';
import Projects from './Projects/Projects.jsx'
import Contact from './Contact/Contact.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}