import React, { useState } from "react";
import loginMamnon from "../../images/login-mamnon.png";
import FormLogin from "../../components/form/form-login/FormLogin";
import FormSign from "../../components/form/form-signin/FormSign";
import "./Form.scss";

export default function Form() {
  const [choose, setForm] = useState(false);
  const chooseForm = (e) => {
    if (e.target.value === "Sign in") setForm(false);
    else setForm(true);
  };
  return (
    <form className="form-login">
      <div className="bg-button"></div>
      <div className="button-group">
        <input
          type="button"
          className={`button-group-item ${choose && "non-input"}`}
          key="1"
          onClick={chooseForm}
          value="Sign in"
        />
        <input
          type="button"
          className={`button-group-item ${!choose && "non-input"}`}
          key="2"
          onClick={chooseForm}
          value="Sign up"
        />
      </div>

      {choose ? (
        <>
          {" "}
          <h2>
            <span>SIGN UP FARM</span> <img src={loginMamnon} alt="img" />
          </h2>
          <FormSign />{" "}
          <input className="submit" type="submit" value="Sign up" />
        </>
      ) : (
        <>
          <h2>
            <span>SIGN IN FARM</span> <img src={loginMamnon} alt="img" />
          </h2>
          <FormLogin />
          <input className="submit" type="submit" value="Login" />
        </>
      )}
    </form>
  );
}
