import "./form.css";
import DebetCard from "../debetCard/DebetCard.js";
function Form() {
  return (
    <div className="form">
      <div className="container">
        <form className="form__inner">
          <h3 className="form__name">Реєстрація</h3>
          <p className="form__descr">Введіть Ваше ім'я та прізвище</p>
          <input
            type="text"
            className="form__input"
            placeholder="Ім'я та прізвище"
          />
          <p className="form__descr">Введіть Вашу пошту</p>
          <input
            type="text"
            className="form__input"
            placeholder="Введіть пошту"
          />
          <p className="form__descr">Введіть пароль</p>
          <input
            type="password"
            className="form__input"
            placeholder="Введіть пароль"
          />
          <DebetCard/>
        </form>
      </div>
    </div>
  );
}

export default Form;
