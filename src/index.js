import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import state from './redux/state'
import { addPost, updateNewPostText } from './redux/state'


const root = ReactDOM.createRoot(document.getElementById('root'));


export let rerenderEnrireTree = () => {
  root.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </BrowserRouter>
  );
}


rerenderEnrireTree()