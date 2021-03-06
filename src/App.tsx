import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import { HomePage } from './pages/home-page/HomePage';
import { AuthPage } from './pages/auth-page/AuthPage';
import { AdminPage } from './pages/admin-page/AdminPage';
import { ManagerPage } from './pages/manager-page/ManagerPage';
import { UserPage } from './pages/user-page/UserPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path= '/auth' element={ <AuthPage /> } />
          <Route path= '/admin' element={ <AdminPage /> } />
          <Route path= '/manager' element={ <ManagerPage /> } />
          <Route path= '/user' element={ <UserPage /> } />
          <Route path='/' element={ <HomePage /> } /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
