import React, {useEffect, useState} from 'react';
import './UserEdit.scss';
import {IKitchen, IManager} from "../../../models/kitchen/IKitchen";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const UserEdit: React.FC = () => {

  let managerChanged = false;
  let kitchenChanged = false;

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
      setKitchenInfo({kitchenId: data["kitchenId"], kitchenName: data["name"], address: { country: dataM["country"], city: dataM["city"], street: dataM["street"], number: dataM["addressNumber"] }, phoneNumber: data["contactPhoneNumber"], contactEmailAddress: data["email"], additionalInformation: data["additionalInformation"]});
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

  async function saveChangesManager() {
    let body = {
      id: managerInfo.managerId,
      userName: managerInfo.userName,
      email: managerInfo.email,
      firstName: managerInfo.firstName,
      lastName: managerInfo.lastName,
      country: kitchenInfo.address.country,
      city: kitchenInfo.address.city,
      street: kitchenInfo.address.street,
      addressNumber: kitchenInfo.address.number,
      phoneNumber: kitchenInfo.phoneNumber,
      role: "manager"
    }

    const token = localStorage.getItem("token");
    const url = "http://localhost:7768/api/User/Edit";
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };

    try {
      console.log("BODY: ", body);
      const response = axios.put(url, body, config);
      console.log("RESPONSE: ", response);
    } catch (error: any) {
      console.log(error);
    }
  }

  async function saveChangesKitchen() {
    let body = {
      id: kitchenInfo.kitchenId,
      managerID: managerInfo.managerId,
      email: kitchenInfo.contactEmailAddress,
      name: kitchenInfo.kitchenName,
      contactPhoneNumber: kitchenInfo.phoneNumber,
      additionalInformation: kitchenInfo.additionalInformation,
      deliveryOpenHour: "it has to be set",
      deliveryCloseHour: "it has to be set",
    }
    const token = localStorage.getItem("token");
    const url = "http://localhost:7768/api/Kitchen/Edit";
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };

    try {
      console.log("BODY: ", body);
      const response = await axios.put(url, body, config);
      console.log("RESPONSE: ", response);
    } catch (error: any) {
      console.log(error);
    }
  }

  async function goBack() {
    await navigate("/offers");//it has to be changed afterwards
  }

  async function saveChanges(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log("Entered saveChanges");
    if(managerChanged)
      await saveChangesManager();
    if(kitchenChanged)
      await saveChangesKitchen();
  }

  return (
    <form id="user-edit">
      <div></div>
      <h2 className="text-black text-large">User & Kitchen Information</h2>
      <br/><br/>
      <button id="user-edit__form-button-save" className="button-green button-medium"
          onClick={async (e) => {await saveChanges(e)}}>Save</button>
      <button id="user-edit__form-button-back" className="button-green-bordered button-medium" onClick={goBack}>Back</button>
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
                onChange={(e) => {managerChanged=true; setManagerInfo({...managerInfo, userName: e.target.value})}}
            />
          </li>
          <li className="input">
            <label htmlFor="manager-first-name">First Name</label>
            <input
                type="text"
                name="manager-first-name"
                id="register__manager-first-name"
                value={managerInfo?.firstName}
                onChange={(event => {managerChanged=true; setManagerInfo({...managerInfo, firstName: event.target.value})})}
            />
          </li>

          <li className="input">
            <label htmlFor="manager-last-name">Last Name</label>
            <input
                type="text"
                name="manager-last-name"
                id="register__manager-last-name"
                value={managerInfo?.lastName}
                onChange={event => {managerChanged=true; setManagerInfo({...managerInfo, lastName: event.target.value})}}
            />
          </li>

          <li className="input">
            <label htmlFor="manager-email">Email</label>
            <input
                type="email"
                name="manager-email"
                id="register__manager-email"
                value={managerInfo?.email}
                onChange={event => {managerChanged=true; setManagerInfo({...managerInfo, email: event.target.value})}}
            />
          </li>

          <li className="input">
            <label htmlFor="manager-password">Password</label>
            <input
                type="password"
                name="manager-password"
                id="register__manager-password"
                value={"*******"} // I think this should be tackled in another page, to discuss with the team
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
                onChange={event => {kitchenChanged = true; setKitchenInfo({...kitchenInfo, kitchenName: event.target.value})}}
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
                  onChange={event => {managerChanged = true; setKitchenInfo({...kitchenInfo, address: {...kitchenInfo.address, country: event.target.value}})}}//here the managerChanged is set to true because the address is tackled in the editManager call
              />
            </div>
  
            <div className="input">
              <label htmlFor="kitchen-city">City</label>
              <input
                  type="text"
                  name="kitchen-city"
                  id="register__kitchen-city"
                  value={kitchenInfo?.address?.city}
                  onChange={event => {managerChanged = true; setKitchenInfo({...kitchenInfo, address: {...kitchenInfo.address, city: event.target.value}})}}
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
                  onChange={event => {managerChanged = true; setKitchenInfo({...kitchenInfo, address: {...kitchenInfo.address, street: event.target.value}})}}
              />
            </div>
  
            <div className="input">
              <label htmlFor="kitchen-number">Number</label>
              <input
                  type="text"
                  name="kitchen-number"
                  id="register__kitchen-number"
                  value={kitchenInfo.address?.number}
                  onChange={event => {managerChanged = true; setKitchenInfo({...kitchenInfo, address: {...kitchenInfo.address, number: event.target.value}})}}
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
                onChange={event => {kitchenChanged = true; setKitchenInfo({...kitchenInfo, phoneNumber: event.target.value})}}
            />
          </li>

          <li className="input">
            <label htmlFor="kitchen-contact-email">Contact Email</label>
            <input
                type="text"
                name="kitchen-contact-email"
                id="register__kitchen-contact-email"
                value={kitchenInfo?.contactEmailAddress}
                onChange={event => {kitchenChanged = true; setKitchenInfo({...kitchenInfo, contactEmailAddress: event.target.value})}}
            />
          </li>

          <li className="input">
            <label htmlFor="kitchen-additional-information">Additional Information</label>
            <textarea
                name="kitchen-additional-information"
                id="register__kitchen-additional-information"
                value={kitchenInfo?.additionalInformation}
                onChange={event => {kitchenChanged = true; setKitchenInfo({...kitchenInfo, additionalInformation: event.target.value})}}
            />
          </li>
        </ul>
      </div>
    </form>
  )
}
