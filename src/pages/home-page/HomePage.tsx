import React from 'react'
import "./HomePage.scss";
import "../../assets/shared_sass/_styles.scss";
import homePageHeroImage from '../../assets/images/home-page-hero-img.png';
import { Link } from 'react-router-dom';


export const HomePage: React.FC = () => {
  return (
    <div id="home-page" className="flex-row">
      <section id="home-page__left" className="flex-row-center-y">
        <div>
          <h1 className="h1 text-xlarge">SKYROCKET YOUR DAILY FOOD DELIVERY BUSINESS</h1>
          <br />
          <p className="text-medium">Partner with us to make a name for your local and reach thousands of customers across the country through our subscription-based platform. You can set up and manage you kitchen quickly and effortlessly.</p>
          <br />
          <br />
          <Link to="/auth/register" className="link button-green button-xlarge">Register Your Kitchen</Link>
        </div>
      </section>
      <section id="home-page__right" className="flex-row-center-y">
        <img id="home-page__hero-img" src={homePageHeroImage} alt=""/>
      </section>
    </div>
  )
}
