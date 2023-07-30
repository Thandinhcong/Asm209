import { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import NotFoundPage from './pages/notFound';
import Layout from './pages/clients/HomePage';
import ContactForm from './pages/clients/contactForm';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Outlet />} >
          <Route index element={<Layout />} />
          <Route path='contacts' element={<ContactForm />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
