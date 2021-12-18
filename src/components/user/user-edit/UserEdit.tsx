import React from 'react';
import './UserEdit.scss';

export const UserEdit: React.FC = () => {
  return (
    <form id="user-edit">
      <div></div>
      <h2 className="text-black text-large">User & Kitchen Information</h2>
      <br/><br/>
      <button id="user-edit__form-button-save" className="button-green button-medium">Save</button>
      <button id="user-edit__form-button-back" className="button-green-bordered button-medium">Back</button>
      <br/><br/><br/>
      <div id="user-edit__form" className="flex-row">
        <ul id="user-edit__column-1" className="ul">
          <h2 className="text-xmedium text-bold green">Manager Profile</h2>
          <br/>
          
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

        <ul id="user-edit__column-2" className="ul">
          <h2 className="text-xmedium text-bold green">Kitchen Profile</h2>
          <br/>

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

          <li className="input">
            <label htmlFor="kitchen-contact-email">Contact Email</label>
            <input type="text" name="kitchen-contact-email" id="register__kitchen-contact-email"/>
          </li>

          <li className="input">
            <label htmlFor="kitchen-additional-information">Additional Information</label>
            <textarea name="kitchen-additional-information" id="register__kitchen-additional-information"/>
          </li>
        </ul>
      </div>
    </form>
  )
}
