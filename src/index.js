import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, How are U?', likesCount: '25' },
  { id: 2, message: 'I fine Tnx?', likesCount: '55' },
]

let dialogs = [
  { id: 1, name: 'Robert' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'Sarah' },
  { id: 4, name: 'Julia' },
  { id: 5, name: 'Richard' },
  { id: 6, name: 'Britney' },
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How Are U?' },
  { id: 3, message: 'Tnx I fine, U?' },
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render ( 
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
