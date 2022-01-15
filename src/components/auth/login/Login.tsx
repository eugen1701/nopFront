import React, {useState, Fragment} from 'react'
import "./Login.scss"
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AUTH_URL = "http://localhost:7768/api/Authentication/Login";

export interface AuthInterface {
  authenticationError: Error | null,
  isAuthenticated: boolean,
  pendingAuthentication: boolean,
  userId?: number,
  userName?: string,
  email?: string,
  password?: string,
  token: string
}

const initialState: AuthInterface = {
  isAuthenticated: false,
  authenticationError: null,
  pendingAuthentication: false,
  token: '',
};

export interface AuthProps{
  token: string,
  userId: number,
  userName: string,
  role: string,
  kitchenId: string
}

export const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export const loginFn: (email?: string, password?: string) => Promise<AuthProps> = (email, password) => {
  return axios.post(AUTH_URL, {email, password}, config)
      .then(result => {
        return Promise.resolve(result.data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
}

export const Login: React.FC = () => {
  const [state, setState] = useState<AuthInterface>(initialState);
  const {email, password} = state;
  const navigate = useNavigate();

  function handleLogin(e: { preventDefault: () => void; }) {
    e.preventDefault();
    let canceled = false;

    authenticate();
    return () => {
      canceled = true;
    }

    async function authenticate() {
      try{
        const {token, role, userId, userName, kitchenId} = await loginFn(email, password);

        if (canceled)
          return;

        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("userId", userId.toString());
        localStorage.setItem("kitchenId", kitchenId.toString());
        localStorage.setItem("userName", userName);
        navigate("/offers");

      } catch (error: any) {
         alert(JSON.stringify(error.response.data["message"]))
      }
    }
  }

  return (
    <div id="login">
      <h1 id="login__heading" className="text-black text-large">Welcome Back!</h1>
      <br/>
        <form id="login__form">

          <ul id="login__form-page" className="ul login__form-ul">
            <li className="input">
              <label htmlFor="manager-username">Email</label>
              <input type="email" name="manager-username" id="login__manager-username" value={email} onChange={event => setState({...state, email: event.target.value})}/>
            </li>

            <li className="input">
              <label htmlFor="manager-password">Password</label>
              <input type="password" name="manager-password" id="login__manager-password" value={password} onChange={event => setState({...state, password: event.target.value})}/>
            </li>
          </ul>

          <div id="login__form-action" className="flex-row-center-y">
            <button className="button-green button-medium" onClick={handleLogin}>Login</button>
          </div>
        </form>
    </div>
  )
}

