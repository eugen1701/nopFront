import React from 'react';
import "./Header.scss";
import "../../assets/shared_sass/_styles.scss";
import nop_logo from '../../assets/svgs/nop-logo.svg';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header id="header">
      <div id="header__left-side">
        <img src={nop_logo} id="header__nop-logo" alt="NOP Logo"/>
      </div>

      <div id="header__right-side">
        <ul id="header__nav-buttons" className="ul flex-pull-right">
          <li><Link to="/auth/login" className="button-no-background button-small link">Log In</Link></li>
          <li><Link to="/auth/register" className="button-green-neutral button-small link">Register</Link></li>
        </ul>

        <nav id="header__nav" className="flex-row">
          <ul id="header__nav-links" className="ul">
            <li><Link to="/" className="link text-bold">Home</Link></li>
            <li><Link to="/" className="link text-bold">About Us</Link></li>
            <li><Link to="/offers" className="link text-bold">Offers</Link></li>
              <li><Link to="/meals" className="link text-bold">Meals</Link></li>
              <li><Link to="/ingredients" className="link text-bold">Ingredients</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
