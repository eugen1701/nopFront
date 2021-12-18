import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import { Header} from './components/header/Header';
import { HomePage } from './pages/home-page/HomePage';
import { AuthPage } from './pages/auth-page/AuthPage';
import { AdminPage } from './pages/admin-page/AdminPage';
import { ManagerPage } from './pages/manager-page/ManagerPage';
import { UserPage } from './pages/user-page/UserPage';
import { OfferConfig } from './components/offer/offer-config/OfferConfig';

require('dotenv').config();

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div id="app">
        <Header />

        <div id="app__routes">
          <Routes>
            <Route path='/auth/*' element={ <AuthPage /> } />
            <Route path='/admin' element={ <AdminPage /> } />
            <Route path='/manager' element={ <ManagerPage /> } />
            <Route path='/user/*' element={ <UserPage /> } />
            <Route path="/offer/:id" element={ <OfferConfig /> } />
            <Route path='/' element={ <HomePage /> } /> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
