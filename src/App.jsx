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

const dialogsData = [
  {
    name: 'aliNa',
    id: '1'
  },
  {
    name: 'sver',
    id: '2'
  },
  {
    name: 'kowka',
    id: '3'
  },
  {
    name: 'koko44',
    id: '4'
  },
  {
    name: 'koko33',
    id: '5'
  },
  {
    name: 'koko22',
    id: '6'
  },
]

const messagesData = [
  {
    user: 'you',
    message: 'hello1',
    id: 1
  },
  {
    user: 'you2',
    message: 'hello22',
    id: 12
  },
  {
    user: 'you3',
    message: 'hello33',
    id: 13
  },
  {
    user: 'you4',
    message: 'hello444',
    id: 14
  },
]



const App = () => {

  return (
    <div className="app-wrapper">
      <Header />
      <Nav />

      {/* ///////////////////////////////////// */}

      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='messages' element={<Messages dialogsData={dialogsData} messagesData={messagesData} />} />
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
