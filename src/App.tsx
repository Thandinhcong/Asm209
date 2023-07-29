import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import NotFoundPage from './pages/notFound';

function App() {

  <BrowserRouter>
    <Routes>
      <Route path='home' element />
    </Routes>
    <Route path='*' element={<NotFoundPage />} />
  </BrowserRouter>
}

export default App
