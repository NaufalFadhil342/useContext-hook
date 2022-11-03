import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, useState } from 'react';

import { Context } from './helper/context';
import { Navbar } from './components/Navbar/navbar';

const Home = React.lazy(() => import('./pages/home'));
const Login = React.lazy(() => import('./pages/login'));
const Profile = React.lazy(() => import('./pages/profile'));

function App() {
  const [username, setUsername] = useState('FadhilTech');
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Context.Provider value={{ username, loggedIn, setUsername, setLoggedIn }}>
      <Router>
        <Navbar />
        <Suspense fallback={<h1 style={{ marginTop: '4rem' }}>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </Router>
    </Context.Provider>
  );
}

export default App;
