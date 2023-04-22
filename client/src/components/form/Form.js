import "./form.css";
import DebetCard from "../debetCard/DebetCard.js";
import React, { useState } from "react";

function Form({form}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formRen, setFormRen] = useState(form);

  const sendDataToDb = (event) => {
    event.preventDefault();

    if (fullName.trim() === "") {
      alert("Введіть ваше ім'я");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Введіть корректну пошту");
    } else if (password.trim() === "" || password.trim() === "") {
      alert("Введіть пароль");
    } else {
      setFullName("");
      setEmail("");
      setPassword("");
    }

    let FormData = {
      fullName: fullName,
      email: email,
      password: password,
    };
    console.log(FormData);
  };

  const typeForm = (data) => {
    return data === 'Enter' ? (
      <div onSubmit={sendDataToDb} className="form">
      <div className="container">
        <form className="form__inner">
          <h3 className="form__name">Вхід</h3>
          <p className="form__descr">Введіть Ваше ім'я та прізвище</p>
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
          <button className="form__submit" type="submit">
            Submit
          </button>
          
        </form>
      </div>
    </div>  ) : (
      <div onSubmit={sendDataToDb} className="form">
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
          <button className="form__submit" type="submit">
            Submit
          </button>
          <DebetCard />
        </form>
      </div>
    </div>  )
  }

  return (

    typeForm(form)
    
  );
}

export default Form;
