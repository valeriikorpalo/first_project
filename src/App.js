import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings';
import { Routes, Route } from 'react-router-dom';


const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Nav state={props.state.navData} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='profile'
              element={<Profile
                state={props.state.profileData}
                addPost={props.addPost} />} />
            <Route path='/dialogs/:id?'
              element={<Dialogs
                state={props.state.dialogsData}
                addMessage={props.addMessage} />} />
            <Route path='/news' Component={News} />
            <Route path='/music' Component={Music} />
            <Route path='/settings' Component={Settings} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
