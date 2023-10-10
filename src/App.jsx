import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Register from './register';
import axios from 'axios';
import './login.css';
import ForgotPassword from './forget-password'
import ResetPassword from './resetpassword.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset_password/:email/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
