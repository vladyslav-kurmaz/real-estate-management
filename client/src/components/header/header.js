import {Link, useNavigate} from 'react-router-dom';
import './header.css';
import {logout} from "../services/http";
import {useEffect, useState} from "react";

const Header = ({form}) => {
    const navigate  = useNavigate();
    const [token, setToken] = useState('');


    useEffect(() => {
        setToken(localStorage.getItem("token"))
    }, [])

    const onActiveForm = (e) => {
        form(() => e.target.getAttribute('data-open'))
    }
    const logoutClick = () => {
        logout()
        navigate('/');
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
              { token ?
                  <button onClick={logoutClick} className="logout">Вийти з аккаунту</button>
                  :
                  <>
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
                  </>
              }
          </div>
        </nav>
      </header>
    );
}

export default Header;