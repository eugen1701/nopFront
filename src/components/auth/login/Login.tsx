import React, {useState, Fragment} from 'react'
import "./Login.scss"

export const Login: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div id="login">
      <h1 id="login__heading" className="text-black text-large">Welcome Back!</h1>
      <br/>
        <form id="login__form">

          <ul id="login__form-page" className="ul login__form-ul">
            <li className="input">
              <label htmlFor="manager-username">Username</label>
              <input type="text" name="manager-username" id="login__manager-username"/>
            </li>

            <li className="input">
              <label htmlFor="manager-password">Password</label>
              <input type="password" name="manager-password" id="login__manager-password"/>
            </li>
          </ul>

          <div id="login__form-action" className="flex-row-center-y">
            <button type="submit" className="button-green button-medium">Login</button>
          </div>

        </form>
    </div>
  )
}

