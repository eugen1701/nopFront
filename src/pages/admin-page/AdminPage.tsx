import React, {Fragment} from 'react'
import authPageSvg from "../../assets/svgs/auth-illustration.svg";
import {Link} from "react-router-dom";
import './AdminPage.scss'
import axios from "axios";

export const AdminPage: React.FC = () => {
  function request(approved:boolean){
    axios.post("http://localhost:7768/api/Admin/Evaluate", {userId:"",isApproved:approved})
      .then(response=>console.log("succes"))
      .catch(error=>console.log(error))
  }
  function renderFormPage(): JSX.Element {
    return (
      <div id="admin-page" className="flex-row flex-space-between">
        <section id="auth-page__left-side" className="flex-row-center-y">
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
          </ul>
        </section>
        <section id="auth-page__right-side" className="flex-row-center-y">
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
        </section>
        <section id="auth-page__right-side" className="flex-row-center-y">
          <ul id="register__form-page-3" className="ul register__form-ul">
            <li className="input">
              <label htmlFor="kitchen-contact-email">Contact Email</label>
              <input type="text" name="kitchen-contact-email" id="register__kitchen-contact-email"/>
            </li>

            <li className="input">
              <label htmlFor="kitchen-additional-information">Additional Information</label>
              <textarea name="kitchen-additional-information" id="register__kitchen-additional-information"/>
            </li>
            <div className={"flex-row-center-x"}>
              <li><button onClick={(e)=>{
                e.preventDefault()
                request(true)}} className="button-green-neutral button-small link">Accept Request</button></li>
              <li><button  onClick={(e)=>{
                e.preventDefault()
                request(false)}}className="button-red-neutral button-small link">Reject Request</button></li>
            </div>


          </ul>
        </section>


      </div>
    )
  }
  return (
    <div id="register">
      <h1 id="register__heading" className="text-black text-large">Registration Request</h1>
      <br/>
      <form id="register__paginated-form">
        { renderFormPage() }
      </form>
    </div>
    )

}
