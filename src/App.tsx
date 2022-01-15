import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import { Header} from './components/header/Header';
import { HomePage } from './pages/home-page/HomePage';
import { AuthPage } from './pages/auth-page/AuthPage';
import { AdminPage } from './pages/admin-page/AdminPage';
import { ManagerPage } from './pages/manager-page/ManagerPage';
import { UserPage } from './pages/user-page/UserPage';
import {OffersPage} from "./pages/offers-page/OffersPage";
import { OfferConfig } from './components/offer/offer-config/OfferConfig';
import { MealsPage } from './pages/meals-page/MealsPage';
import { IngredientsPage } from './pages/ingredients-page/IngredientsPage';

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
            <Route path='/offers' element={ <OffersPage/> } />
            <Route path="/offers/:id" element={ <OfferConfig /> } />
            <Route path="/meals" element= { <MealsPage /> } />
            <Route path="/ingredients" element= { <IngredientsPage /> } />
            <Route path='/' element={ <HomePage /> } /> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
