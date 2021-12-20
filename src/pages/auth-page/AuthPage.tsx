import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Login } from '../../components/auth/login/Login'
import { Register } from '../../components/auth/register/Register'
import authPageSvg from '../../assets/svgs/auth-illustration.svg'; 
import './AuthPage.scss';
import '../../assets/shared_sass/_styles.scss';

export const AuthPage: React.FC = () => {
  return (
    <div id="auth-page" className="flex-row">
      <section id="auth-page__left-side" className="flex-row-center-y">
        <Routes>
          <Route path='login' element={ <Login /> } />
          <Route path='register' element={ <Register /> } />
        </Routes>
      </section>

      <section id="auth-page__right-side" className="flex-row-center-y">
        <img className="flex-pull-right" src={authPageSvg} alt="authentication illustration"/>
      </section>
    </div>
  )
}
