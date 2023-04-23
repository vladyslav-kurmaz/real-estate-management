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
          <Link to={"/"}>Головна</Link>
          <div
            className="header__button"
          >
            <Link to={"/productpage"} className="button">
              Пропозиції
            </Link>
            {token ? (
              <>
                <Link to={"/product-create"} className="button">
                  Створити
                </Link>

                <button onClick={logoutClick} className="logout">
                  Вийти
                </button>
              </>
            ) : (
              <>
                <Link
                  to={"/login"}
                  onClick={onActiveForm}
                  data-open="Enter"
                  className="buttonEnter"
                >
                  Вхід
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
    );
}

export default Header;