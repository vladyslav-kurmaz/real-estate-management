import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-list-item"><Link to={'/'}>Головна</Link></li>
                    {/* <li className="header__nav-list-item">Розмістити оголошення</li> */}
                </ul>

                <div className="header__button">
                    <Link to={'/login'} className="button">Вхід</Link>
                    <Link to={'/singup'} className="button">Реєстрація</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;