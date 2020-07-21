import React from "react";
import "./FormSign.scss";
import loginIconUser from "../../../images/login-iconUser.svg";
import Password from "../../../images/password.svg";
export default function FormSign() {
  return (
    <>
      <div className="form-sign__input">
        <label htmlFor="user-name">
          <img src={loginIconUser} alt="img" /> <span>User Name</span>
        </label>
        <input type="text" id="user-name" />
      </div>
      <div className="form-sign__input">
        <label htmlFor="pass">
          <img src={Password} alt="img" /> <span>Password</span>
        </label>
        <input type="password" id="pass" />
      </div>
      <div className="form-sign__input">
        <label htmlFor="pass">
          <img src={Password} alt="img" /> <span>Retype Password</span>
        </label>
        <input type="password" id="pass" />
      </div>
    </>
  );
}
