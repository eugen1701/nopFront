import React, { Fragment } from 'react'
import { useState } from 'react';
import './Register.scss';

export const Register: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  function renderFormPage1(): JSX.Element {
    return (
      <Fragment>
        <h2 className="text-xmedium text-bold green">Manager Profile</h2>
        <br/>
        <ul id="register__form-page-1" className="ul register__form-ul">
          <li className="input">
            <label htmlFor="manager-username">Username</label>
            <input type="text" name="manager-username" id="register__manager-username"/>
          </li>
          <li className="input">
            <label htmlFor="manager-first-name">First Name</label>
            <input type="text" name="manager-first-name" id="register__manager-first-name"/>
          </li>

          <li className="input">
            <label htmlFor="manager-last-name">Last Name</label>
            <input type="text" name="manager-last-name" id="register__manager-last-name"/>
          </li>

          <li className="input">
            <label htmlFor="manager-email">Email</label>
            <input type="email" name="manager-email" id="register__manager-email"/>
          </li>

          <li className="input">
            <label htmlFor="manager-password">Password</label>
            <input type="password" name="manager-password" id="register__manager-password"/>
          </li>
        </ul>
      </Fragment>
    )
  }

  function renderFormPage2(): JSX.Element {
    return (
      <Fragment>
        <h2 className="text-xmedium text-bold green">Kitchen Profile</h2>
        <br/>
        <ul id="register__form-page-2" className="ul register__form-ul">
          <li className="input">
            <label htmlFor="kitchen-name">Name</label>
            <input type="text" name="kitchen-name" id="register__kitchen-name"/>
          </li>

          <li className="register__inputs-address-line">
            <div className="input">
              <label htmlFor="kitchen-country">Country</label>
              <input type="text" name="kitchen-country" id="register__kitchen-country"/>
            </div>
  
            <div className="input">
              <label htmlFor="kitchen-city">City</label>
              <input type="text" name="kitchen-city" id="register__kitchen-city"/>
            </div>
          </li>

          <li className="register__inputs-address-line">
            <div className="input">
              <label htmlFor="kitchen-street">Street</label>
              <input type="text" name="kitchen-street" id="register__kitchen-street"/>
            </div>
  
            <div className="input">
              <label htmlFor="kitchen-number">Number</label>
              <input type="text" name="kitchen-number" id="register__kitchen-number"/>
            </div>
          </li>

          <li className="input">
            <label htmlFor="kitchen-phone-number">Phone Number</label>
            <input type="text" name="kitchen-phone-number" id="register__kitchen-phone-number"/>
          </li>
        </ul>
      </Fragment>
    )
  }

  function renderFormPage3(): JSX.Element {
    return (
      <Fragment>
        <h2 className="text-xmedium text-bold green">Kitchen Profile</h2>
        <br/>
        <ul id="register__form-page-3" className="ul register__form-ul">
          <li className="input">
            <label htmlFor="kitchen-contact-email">Contact Email</label>
            <input type="text" name="kitchen-contact-email" id="register__kitchen-contact-email"/>
          </li>

          <li className="input">
            <label htmlFor="kitchen-additional-information">Additional Information</label>
            <textarea name="kitchen-additional-information" id="register__kitchen-additional-information"/>
          </li>
        </ul>
      </Fragment>
    )
  }

  function renderCurrentFormPage(): JSX.Element | null {
    switch (currentPage) {
      case 1:
        return renderFormPage1();
      case 2:
        return renderFormPage2();
      case 3:
        return renderFormPage3();
      default:
        return (null);
    }
  }

  function goToNextPage(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  }

  function renderFormButton(): JSX.Element {
    if(currentPage == 1 || currentPage == 2) {
      return <button className="button-green-bordered button-medium" onClick={(e) => goToNextPage(e)}>Continue</button>
    }
    return <button type="submit" className="button-green button-medium">Finish Registration</button>
  }

  return (
    <div id="register">
      <h1 id="register__heading" className="text-black text-large">Register Your Kitchen</h1>
      <br/>
      <form id="register__paginated-form">
        { renderCurrentFormPage() }

        <div id="register__paginated-form-actions" className="flex-row-center-y">
          { renderFormButton() }
          <span className="flex-pull-right green text-black">{ currentPage } / 3</span>
        </div>
      </form>
    </div>
  )
}
