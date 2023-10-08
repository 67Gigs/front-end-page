import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Register from './register';
import axios from 'axios';
import './login.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
