import '../css/App.css';
import React from 'react';
import DashboardPage from './DasboardPage';
import Sidebar from './Sidebar';
import { Route,BrowserRouter,Switch } from 'react-router-dom';
import Profile from './Profile';

// import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Sidebar />
      <Profile />
    
    </div>
    </BrowserRouter>
  );
}

export default App;
