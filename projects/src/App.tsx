
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import NotFoundPage from './pages/notFound';
import Layout from './pages/clients/HomePage';
import ContactForm from './pages/clients/contactForm';
import Login from './pages/auths/signin/Login';
import Signup from './pages/auths/signup/signup';
import DeTailProduct from './pages/clients/deltailItem';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Outlet />} >
          <Route index element={<Layout />} />
          <Route path='contacts' element={<ContactForm />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='detail/:id' element={<DeTailProduct />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
