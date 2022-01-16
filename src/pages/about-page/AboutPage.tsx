import React from "react";
import {Link} from "react-router-dom";
import homePageHeroImage from "../../assets/images/home-page-hero-img.png";


export const AboutPage: React.FC = () => {
  return (
    <div id="home-page" className="flex-row">
      <section id="auth-page__right-side" className="flex-row-center-x">
        <div className="center">
          <p className="text-medium">Alex Bota: Product owner and back-end</p>
          <p className="text-medium">Eugen Flocea: Tech lead, team lead and front-end</p>
          <p className="text-medium">Alex Balazshazi: Mobile</p>
          <p className="text-medium">Stefan Borodi: Mobile</p>
          <p className="text-medium">Ewald Berla: Front-end</p>
          <p className="text-medium">Robert Birliga: Front-end and UI/UX</p>
          <p className="text-medium">Flaviu Albu: Front-end</p>
          <p className="text-medium">Zsolt Birta: Back-end</p>
          <p className="text-medium">Monica Boicu: Back-end</p>
          <p className="text-medium">Iulia Galatan: Back-end</p>
          <p className="text-medium">Raul Acatrinei: QA Test</p>
          <p className="text-medium">Raul Ianos: QA Test</p>
        </div>
      </section>
    </div>
  )
}