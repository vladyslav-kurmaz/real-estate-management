import "./form.css";
import React, { useState, useEffect } from "react";
import {login, registration} from "../services/http";
import {Link, useNavigate} from "react-router-dom";


function Form({form}) {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bankDetails, setBankDetails] = useState("");

  /**Animation */
  useEffect(() => {
    reveal(); // виклик функції при рендерингу компонента
  });

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  reveal();
  /**Animation */

  const loginClick = async (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email) || password.trim() === "") {
      alert("Введіть всі дані");
      return;
    }

    let formData = {
      email: email,
      password: password,
    };

    await login(formData);

    setEmail("");
    setPassword("");
    navigate("/");
  };

  const registerClick = async (e) => {
    e.preventDefault();
    if (
      fullName.trim() === "" ||
      !/\S+@\S+\.\S+/.test(email) ||
      password.trim() === "" ||
      bankDetails.trim() === ""
    ) {
      alert("Введіть всі дані");
      return;
    }

    let formData = {
      email: email,
      fullName: fullName,
      bankDetails: bankDetails,
      password: password,
    };
    await registration(formData);

    setEmail("");
    setPassword("");
    setBankDetails("");
    setFullName("");
    navigate("/");
  };

  const typeForm = (data) => {
    return data === "Enter" ? (
      <div className="container">
        <form className="form__inner reveal">
          <h3 className="form__name">Вхід</h3>
          <p className="form__descr">Введіть Вашу пошту</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            className="form__input"
            placeholder="Введіть пошту"
          />
          <p className="form__descr">Введіть пароль</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form__input"
            placeholder="Введіть пароль"
          />
          <button onClick={loginClick} className="form__submit" type="submit">
            Submit
          </button>
          <div>
            Не маєте аккаунту?
            <Link
              to={"/singup"}
              onClick={window.location.reload}
              data-open="SingUp"
              className="button"
            >
              Реєстрація
            </Link>
          </div>
        </form>
      </div>
    ) : (
      <div className="container">
        <form className="form__inner">
          <h3 className="form__name">Реєстрація</h3>
          <p className="form__descr">Введіть Ваше ім'я та прізвище</p>
          <input
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            className="form__input"
            placeholder="Ім'я та прізвище"
          />
          <p className="form__descr">Введіть Вашу пошту</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            className="form__input"
            placeholder="Введіть пошту"
          />
          <p className="form__descr">Введіть пароль</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form__input"
            placeholder="Введіть пароль"
          />
          <div className="card">
            <div className="container">
              <div className="card__inner">
                <p className="card__descr">Введіть номер карти</p>
                <input
                  onChange={(e) => setBankDetails(e.target.value)}
                  value={bankDetails}
                  placeholder="****************"
                  className="card__input"
                  type="text"
                />
              </div>
            </div>
          </div>
          <button
            onClick={registerClick}
            className="form__submit"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };

  return typeForm(form);
}

export default Form;
