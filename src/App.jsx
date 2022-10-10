import './App.css';
import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import Messages from './components/Nav/Messages/Messages'
import Music from './components/Nav/Music/Music'
import News from './components/Nav/News/News'
import Profile from './components/Nav/Profile/Profile';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />

      {/* ///////////////////////////////////// */}

      <Routes>
          <Route path='profile' element={<Profile />} />
          <Route path='messages' element={<Messages />} />
          <Route path='news' element={<News />} />
          <Route path='music' element={<Music />} />
      </Routes>

      <Outlet />

      {/* ///////////////////////////////////// */}

      <Footer />
    </div>

  );
}

export default App;
