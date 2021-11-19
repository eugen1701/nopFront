import React from 'react'
import "./HomePage.scss";
import "../..//assets/shared_sass/_styles.scss";
import home_page_hero_img from '../../assets/images/home-page-hero-img.png';

export const HomePage: React.FC = () => {
  return (
    <div id="home-page" className="flex-row">
      <img id="home-page__hero-img" src={home_page_hero_img} alt=""/>
      <section id="home-page__hero-main-section">
        <h1 className="h1 text-xlarge"> <span className="fancy-underline">SKYROCKET</span> YOUR DAILY FOOD DELIVERY BUSINESS RIGHT NOW</h1>
        <br />
        <p className="text-medium">Partner with us to make a name for your local and reach thousands of customers across the country through our subscription-based platform, quickly & effortlessly.</p>
        <br /> <br />
        <button className="button-green button-xlarge">Register Your Kitchen</button>
      </section>
    </div>
  )
}
