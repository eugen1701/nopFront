import React, {useEffect, useState} from 'react';
import './UserEdit.scss';
import {IKitchen, IManager} from "../../../models/kitchen/IKitchen";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const UserEdit: React.FC = () => {

  const [managerInfo, setManagerInfo] = useState<IManager>({
    managerId: "",
    userName: "",
    lastName: "",
    firstName: "",
    email: "",
    password: ""
  });
  const [kitchenInfo, setKitchenInfo] = useState<IKitchen>({
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

  async function getManagerData() {
    let token = localStorage.getItem("token");
    let userID = localStorage.getItem("userId");
    let url = `http://localhost:7768/api/User/Details/${userID}`;
    const config  ={
      headers: { Authorization: `Bearer ${token}` }
    };
    try{
      let resp = await axios.get(url, config);
      console.log("Raspuns: ", resp)
      let data = resp.data;
      //set the initial infos for manager
      setManagerInfo({...managerInfo, userName: data["userName"], lastName: data["lastName"], firstName: data["firstName"], email: data["email"], password: data["password"]});
      return data;
    } catch (error: any) {
      alert(JSON.stringify(error.response.data["errors"], null, 2));
    }
    return;
  }

  async function getKitchenData(dataM:any) {
    let token = localStorage.getItem("token");
    let url = `http://localhost:7768/api/Kitchen/Details/${dataM["kitchenId"]}`;
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };

    try {
      let resp = await axios.get(url, config);
      console.log("Raspuns: ", resp)
      let data = resp.data;
      setKitchenInfo({kitchenId: data["kitchenId"], kitchenName: data["name"], address: { country: dataM["country"], city: dataM["city"], street: dataM["street"], number: dataM["addressNumber"] }, phoneNumber: dataM["phoneNumber"], contactEmailAddress: data["email"], additionalInformation: data["additionalInformation"]});
    } catch (error: any) {
      alert(JSON.stringify(error.response.data["errors"], null, 2));
    }
  }

  useEffect( () => {
    async function fetchInitialData() {
      const someData = await getManagerData();
      await getKitchenData(someData);
    }

    fetchInitialData().then(() => {});

  }, []);

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
            <input
                type="text"
                name="manager-username"
                id="register__manager-username"
                value={managerInfo?.userName}
            />
          </li>
          <li className="input">
            <label htmlFor="manager-first-name">First Name</label>
            <input
                type="text"
                name="manager-first-name"
                id="register__manager-first-name"
                value={managerInfo?.firstName}
            />
          </li>

          <li className="input">
            <label htmlFor="manager-last-name">Last Name</label>
            <input
                type="text"
                name="manager-last-name"
                id="register__manager-last-name"
                value={managerInfo?.lastName}
            />
          </li>

          <li className="input">
            <label htmlFor="manager-email">Email</label>
            <input
                type="email"
                name="manager-email"
                id="register__manager-email"
                value={managerInfo?.email}
            />
          </li>

          <li className="input">
            <label htmlFor="manager-password">Password</label>
            <input
                type="password"
                name="manager-password"
                id="register__manager-password"
                value={"*******"}
            />
          </li>
        </ul>

        <ul id="user-edit__column-2" className="ul">
          <h2 className="text-xmedium text-bold green">Kitchen Profile</h2>
          <br/>

          <li className="input">
            <label htmlFor="kitchen-name">Name</label>
            <input
                type="text"
                name="kitchen-name"
                id="register__kitchen-name"
                value={kitchenInfo?.kitchenName}
            />
          </li>

          <li className="register__inputs-address-line">
            <div className="input">
              <label htmlFor="kitchen-country">Country</label>
              <input
                  type="text"
                  name="kitchen-country"
                  id="register__kitchen-country"
                  value={kitchenInfo?.address?.country}
              />
            </div>
  
            <div className="input">
              <label htmlFor="kitchen-city">City</label>
              <input
                  type="text"
                  name="kitchen-city"
                  id="register__kitchen-city"
                  value={kitchenInfo?.address?.city}
              />
            </div>
          </li>

          <li className="register__inputs-address-line">
            <div className="input">
              <label htmlFor="kitchen-street">Street</label>
              <input
                  type="text"
                  name="kitchen-street"
                  id="register__kitchen-street"
                  value={kitchenInfo.address?.street}
              />
            </div>
  
            <div className="input">
              <label htmlFor="kitchen-number">Number</label>
              <input
                  type="text"
                  name="kitchen-number"
                  id="register__kitchen-number"
                  value={kitchenInfo.address?.number}
              />
            </div>
          </li>

          <li className="input">
            <label htmlFor="kitchen-phone-number">Phone Number</label>
            <input
                type="text"
                name="kitchen-phone-number"
                id="register__kitchen-phone-number"
                value={kitchenInfo?.phoneNumber}
            />
          </li>

          <li className="input">
            <label htmlFor="kitchen-contact-email">Contact Email</label>
            <input
                type="text"
                name="kitchen-contact-email"
                id="register__kitchen-contact-email"
                value={kitchenInfo?.contactEmailAddress}
            />
          </li>

          <li className="input">
            <label htmlFor="kitchen-additional-information">Additional Information</label>
            <textarea
                name="kitchen-additional-information"
                id="register__kitchen-additional-information"
                value={kitchenInfo?.additionalInformation}
            />
          </li>
        </ul>
      </div>
    </form>
  )
}
