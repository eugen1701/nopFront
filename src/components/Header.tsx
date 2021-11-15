import React from 'react';
import "./Header.scss";
import "../assets/shared_sass/_styles.scss";
import nop_logo from '../assets/svgs/nop-logo.svg';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header id="header">
      <img src={nop_logo} id="header__nop-logo" alt="NOP Logo"/>

      <nav id="header__nav" className="flex-row">
        <ul id="header__nav-links" className="ul">
          <li><Link to="/" className="link text-bold">Home</Link></li>
          <li><Link to="/" className="link text-bold">About Us</Link></li>
          <li><Link to="/" className="link text-bold">Contact</Link></li>
        </ul>
      </nav>

      <ul id="header__nav-buttons" className="ul flex-pull-right">
        <li><button className="button-green-neutral">Register</button></li>
        <li><button className="button-no-background">Sign In</button></li>
      </ul>
    </header>
  )
}
