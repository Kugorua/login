import React from "react";
import "./FormLogin.scss";
import loginIconUser from "../../../images/login-iconUser.svg";
import Password from "../../../images/password.svg";
export default function FormLogin() {
  return (
    <>
      <div className="form-login__input">
        <label htmlFor="user-name">
          <img src={loginIconUser} alt="img" /> <span>User Name</span>
        </label>
        <input type="text" id="user-name" />
      </div>
      <div className="form-login__input">
        <label htmlFor="pass">
          <img src={Password} alt="img" /> <span>Password</span>
        </label>
        <input type="password" id="pass" />
      </div>
    </>
  );
}
