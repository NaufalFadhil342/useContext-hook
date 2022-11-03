import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Context } from './helper/context';
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';
import { Navbar } from './components/Navbar/navbar';

function App() {
  const [username, setUsername] = useState('FadhilTech');
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Context.Provider value={{ username, loggedIn, setUsername, setLoggedIn }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
