import React, { Fragment, useEffect } from 'react'
import { useState } from 'react';
import './Register.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../../assets/svgs/back-arrow.svg';
import {IKitchen, IManager} from "../../../models/kitchen/IKitchen";

export const Register: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [managerRegistrationData, setManagerRegistrationData] = useState<IManager>({
    managerId: "",
    userName: "",
    lastName: "",
    firstName: "",
    email: "",
    password: ""
  });
  const [kitchenRegistrationData, setKitchenRegistrationData] = useState<IKitchen>({
    kitchenId: "",
    kitchenName: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: ""
    },
    phoneNumber: "",
    contactEmailAddress: "",
    additionalInformation: ""
  });
  const navigate = useNavigate();
  
  function renderFormPage1(): JSX.Element {
    return (
      <Fragment>
        <h2 className="text-xmedium text-bold green">Manager Profile</h2>
        <br/>
        <ul id="register__form-page-1" className="ul register__form-ul">
          <li className="input">
            <label htmlFor="manager-username">Username</label>
            <input 
              type="text" 
              name="manager-username" 
              id="register__manager-username" 
              value={ managerRegistrationData?.userName }
              onChange={ (e) => setManagerRegistrationData({...managerRegistrationData, userName: e.target.value}) } 
            />
          </li>
          <li className="input">
            <label htmlFor="manager-first-name">First Name</label>
            <input 
              type="text" 
              name="manager-first-name" 
              id="register__manager-first-name" 
              value={managerRegistrationData?.firstName} 
              onChange={ (e) => setManagerRegistrationData({...managerRegistrationData, firstName: e.target.value}) } 
            />
          </li>

          <li className="input">
            <label htmlFor="manager-last-name">Last Name</label>
            <input 
              type="text" 
              name="manager-last-name" 
              id="register__manager-last-name" 
              value={managerRegistrationData?.lastName} 
              onChange={ (e) => setManagerRegistrationData({...managerRegistrationData, lastName: e.target.value}) } 
            />
          </li>

          <li className="input">
            <label htmlFor="manager-email">Email</label>
            <input 
              type="email" 
              name="manager-email" 
              id="register__manager-email" 
              value={managerRegistrationData?.email} 
              onChange={ (e) => setManagerRegistrationData({...managerRegistrationData, email: e.target.value}) } 
            />
          </li>

          <li className="input">
            <label htmlFor="manager-password">Password</label>
            <input 
              type="password" 
              name="manager-password" 
              id="register__manager-password" 
              value={managerRegistrationData?.password} 
              onChange={ (e) => setManagerRegistrationData({...managerRegistrationData, password: e.target.value}) } 
            />
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
            <input 
              type="text" 
              name="kitchen-name" 
              id="register__kitchen-name"
              value={kitchenRegistrationData?.kitchenName} 
              onChange={ (e) => setKitchenRegistrationData({...kitchenRegistrationData, kitchenName: e.target.value}) } 
            />
          </li>

          <li className="register__inputs-address-line">
            <div className="input">
              <label htmlFor="kitchen-country">Country</label>
              <input 
                type="text" 
                name="kitchen-country" 
                id="register__kitchen-country"
                value={kitchenRegistrationData?.address.country} 
                onChange={ (e) => setKitchenRegistrationData({...kitchenRegistrationData, address: {...kitchenRegistrationData.address, country: e.target.value}}) } 
              />
            </div>
  
            <div className="input">
              <label htmlFor="kitchen-city">City</label>
              <input 
                type="text" 
                name="kitchen-city" 
                id="register__kitchen-city"
                value={kitchenRegistrationData?.address.city} 
                onChange={ (e) => setKitchenRegistrationData({...kitchenRegistrationData, address: {...kitchenRegistrationData.address, city: e.target.value}}) } />
            </div>
          </li>

          <li className="register__inputs-address-line">
            <div className="input">
              <label htmlFor="kitchen-street">Street</label>
              <input 
                type="text" 
                name="kitchen-street" 
                id="register__kitchen-street"
                value={kitchenRegistrationData?.address.street} 
                onChange={ (e) => setKitchenRegistrationData({...kitchenRegistrationData, address: {...kitchenRegistrationData.address, street: e.target.value}}) } />
            </div>
  
            <div className="input">
              <label htmlFor="kitchen-number">Number</label>
              <input 
                type="text" 
                name="kitchen-number" 
                id="register__kitchen-number"
                value={kitchenRegistrationData?.address.number} 
                onChange={ (e) => setKitchenRegistrationData({...kitchenRegistrationData, address: {...kitchenRegistrationData.address, number: e.target.value}}) }               />
            </div>
          </li>

          <li className="input">
            <label htmlFor="kitchen-phone-number">Phone Number</label>
            <input 
              type="text" 
              name="kitchen-phone-number" 
              id="register__kitchen-phone-number"
              value={kitchenRegistrationData?.phoneNumber} 
              onChange={ (e) => setKitchenRegistrationData({...kitchenRegistrationData, phoneNumber: e.target.value}) } 
            />
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
            <input 
              type="text" 
              name="kitchen-contact-email" 
              id="register__kitchen-contact-email"
              value={kitchenRegistrationData?.contactEmailAddress} 
              onChange={ (e) => setKitchenRegistrationData({...kitchenRegistrationData, contactEmailAddress: e.target.value}) } 
            />
          </li>

          <li className="input">
            <label htmlFor="kitchen-additional-information">Additional Information</label>
            <textarea 
              name="kitchen-additional-information" 
              id="register__kitchen-additional-information"
              value={kitchenRegistrationData?.additionalInformation} 
              onChange={ (e) => setKitchenRegistrationData({...kitchenRegistrationData, additionalInformation: e.target.value}) } 
            />
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

  async function submitRegisrationForm() {
    const body = {
      ...managerRegistrationData,
      ...kitchenRegistrationData
    };

    try {
      console.log('BODY: ', body);
      const response = await axios.post("http://localhost:7768/api/Authentication/Register/Manager", body);
      console.log('RESPONSE: ', response);

      navigate('/auth/login');
    }
    catch(error: any) {
      alert(JSON.stringify(error.response.data["errors"], null, 2));
    }
  }

  function saveAndValidatePage1Data() {
    return true;
  }

  function saveAndValidatePage2Data() {
    return true;
  }

  function saveAndValidatePage3Data() {
    return true;
  }

  function saveAndValidatePageData() {
    switch(currentPage) {
      case 1: 
        return saveAndValidatePage1Data();
      case 2:
        return saveAndValidatePage2Data();
      case 3:
        return saveAndValidatePage3Data();
      default:
        return false;
    }
  }

  function validateFormPage(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    let isValidData = saveAndValidatePageData();
  }

  function renderFormButton(): JSX.Element {
    if(currentPage === 1 || currentPage === 2) {
      return <button className="button-green-bordered button-medium" onClick={(e) => { validateFormPage(e); setCurrentPage(currentPage + 1)} }>Continue</button>
    }
    return <button className="button-green button-medium" onClick={(e) => { validateFormPage(e); submitRegisrationForm()}}>Finish Registration</button>
  }

  function goBack() {
    if (currentPage != 2 && currentPage != 3)  {
      return;
    }
    setCurrentPage(currentPage - 1);
  }

  function renderBackButton() {
    if(currentPage === 2 || currentPage === 3) {
      return (
        <button id="register__back" className="flex-row-center-y" onClick={goBack}>
          <img src={backArrow} alt="" />
          <p className="text-medium">Previous Page</p>
        </button>
      );
    }
    return null;
  }

  return (
    <div id="register">
      <h1 id="register__heading" className="text-black text-large">Register Your Kitchen</h1>
      <br />
      { renderBackButton() }
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