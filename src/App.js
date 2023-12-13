import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav state={props.state.navData} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='profile'
              element={<Profile
                state={props.state.profileData} />} />
            <Route path='/dialogs/:id?'
              element={<Dialogs
                state={props.state.dialogsData} />} />
            <Route path='/news' Component={News} />
            <Route path='/music' Component={Music} />
            <Route path='/settings' Component={Settings} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
