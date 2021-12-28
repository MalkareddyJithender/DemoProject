import '../css/App.css';
import React from 'react';
import DashboardPage from './DasboardPage';
import AdminDashboardPage from './AdminDashboard';
import Signup from './Signup';
import Login from './Login';

import { Route,BrowserRouter} from 'react-router-dom';

// import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Route path="/" component={Signup} exact={true} />
      <Route path="/user-dashboard" component={DashboardPage} exact={true} /> 
      <Route path="/admin-dashboard" component={AdminDashboardPage} exact={true} /> 
      <Route path="/login" component={Login} exact={true} />
    </div>
    </BrowserRouter>
  );
}

export default App;
