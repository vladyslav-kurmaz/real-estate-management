import { Link } from 'react-router-dom';
import './header.css';

const Header = ({form}) => {

    const onActiveForm = (e) => {
        form(() => e.target.getAttribute('data-open'))
    }

    return (
      <header className="header">
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-list-item">
              <Link to={"/"}>Головна</Link>
            </li>
            {/* <li className="header__nav-list-item">Розмістити оголошення</li> */}
          </ul>

          <div className="header__button">
            <Link
              to={"/login"}
              onClick={onActiveForm}
              data-open="Enter"
              className="button"
            >
              Вхід
            </Link>
            <Link
              to={"/singup"}
              onClick={onActiveForm}
              data-open="SingUp"
              className="button"
            >
              Реєстрація
            </Link>
            <button className="logout">Вийти з аккаунту</button>
          </div>
        </nav>
      </header>
    );
}

export default Header;