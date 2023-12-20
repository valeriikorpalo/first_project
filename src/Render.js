import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { addPost } from './redux/state.js';
import { BrowserRouter } from 'react-router-dom';
import { addMessage } from './redux/state.js';



export let rerenderEntireTree = (state) => {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost} addMessage={addMessage}/>
    </BrowserRouter>
  </React.StrictMode>
);
}

