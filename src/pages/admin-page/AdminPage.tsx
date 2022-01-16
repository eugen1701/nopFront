import React, {Fragment, useEffect, useState} from 'react'
import authPageSvg from "../../assets/svgs/auth-illustration.svg";
import {Link} from "react-router-dom";
import './AdminPage.scss'
import axios from "axios";


export const AdminPage: React.FC = () => {
  const [admins, setAdmin] = useState<any>({
    userName:"",
    firstName:"",
    lastName:"",
    email:"",
    kitchenName:"",
    address: {
      city: "",
      country: "",
      street: "",
      number: "",
    },
    phoneNumber:"",
    contactEmailAddress:"",
    additionalInformation:""
  });
  const config = {
    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
  };
  const fetchAdmin = async () => {
    //alert("itdoesnotmatter");
    try {
      const response = await axios.get(`http://localhost:7768/api/User/PendingRegistrations/${localStorage.getItem("userId")}`, config);
      if (response.data[0]!=undefined){
        setAdmin(response.data[0]);
      }

      //alert(`----- FETCH ADMIN: ${JSON.stringify(response.data[0])}`)
    }
    catch (e)
    {console.error(e)}
  };

  useEffect(() => {
    fetchAdmin();
  }, [])

  async function request(approved:String){
    try{
      const id=admins.userId;
      const response = await  axios.get(`http://localhost:7768/api/User/AcceptRejectRegistration/${id}/${approved}`,config);
      alert(`-- Response for acceptance: ${JSON.stringify(response.data[0])}`)
    }
    catch (e)
    {
      alert(e)
    }

  }
  function renderFormPage(): JSX.Element {
    return (
      <div id="admin-page" className="flex-row flex-space-between">
        <section id="auth-page__left-side" className="flex-row-center-y">
          <ul id="register__form-page-1" className="ul register__form-ul">
            <li className="input">
              <label htmlFor="manager-username">Username</label>
              <input type="text" name="manager-username" id="register__manager-username" value={admins.userName}/>
            </li>
            <li className="input">
              <label htmlFor="manager-first-name">First Name</label>
              <input type="text" name="manager-first-name" id="register__manager-first-name" value={admins.firstName}/>
            </li>

            <li className="input">
              <label htmlFor="manager-last-name">Last Name</label>
              <input type="text" name="manager-last-name" id="register__manager-last-name" value={admins.lastName}/>
            </li>

            <li className="input">
              <label htmlFor="manager-email">Email</label>
              <input type="email" name="manager-email" id="register__manager-email" value={admins.email}/>
            </li>
          </ul>
        </section>
        <section id="auth-page__right-side" className="flex-row-center-y">
          <ul id="register__form-page-2" className="ul register__form-ul">
            <li className="input">
              <label htmlFor="kitchen-name">Name</label>
              <input type="text" name="kitchen-name" id="register__kitchen-name" value={admins.kitchenName}/>
            </li>

            <li className="register__inputs-address-line">
              <div className="input">
                <label htmlFor="kitchen-country">Country</label>
                <input type="text" name="kitchen-country" id="register__kitchen-country" value={admins.address.country}/>
              </div>

              <div className="input">
                <label htmlFor="kitchen-city">City</label>
                <input type="text" name="kitchen-city" id="register__kitchen-city" value={admins.address.city}/>
              </div>
            </li>

            <li className="register__inputs-address-line">
              <div className="input">
                <label htmlFor="kitchen-street">Street</label>
                <input type="text" name="kitchen-street" id="register__kitchen-street" value={admins.address.street}/>
              </div>

              <div className="input">
                <label htmlFor="kitchen-number">Number</label>
                <input type="text" name="kitchen-number" id="register__kitchen-number" value={admins.address.number}/>
              </div>
            </li>

            <li className="input">
              <label htmlFor="kitchen-phone-number">Phone Number</label>
              <input type="text" name="kitchen-phone-number" id="register__kitchen-phone-number" value={admins.address.phoneNumber}/>
            </li>
          </ul>
        </section>
        <section id="auth-page__right-side" className="flex-row-center-y">
          <ul id="register__form-page-3" className="ul register__form-ul">
            <li className="input">
              <label htmlFor="kitchen-contact-email">Contact Email</label>
              <input type="text" name="kitchen-contact-email" id="register__kitchen-contact-email" value={admins.contactEmailAddress}/>
            </li>

            <li className="input">
              <label htmlFor="kitchen-additional-information">Additional Information</label>
              <textarea name="kitchen-additional-information" id="register__kitchen-additional-information" value={admins.additionalInformation}/>
            </li>
            <div className={"flex-row-center-x"}>
              <li><button className="button-green-neutral button-small link" onClick={()=>request("true")}>Accept Request</button></li>
              <li><button className="button-red-neutral button-small link" onClick={()=>request("false")}>Reject Request</button></li>
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
