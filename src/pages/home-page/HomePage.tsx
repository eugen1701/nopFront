import React from 'react'
import "./HomePage.scss";
import home_page_hero_img from '../../assets/images/home-page-hero-img.png';

export const HomePage: React.FC = () => {
  return (
    <div id="home-page">
      
      <img id="home-page__hero-img" src={home_page_hero_img} alt=""/>
    </div>
  )
}
