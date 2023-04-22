
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-list-item">Головна</li>
                    {/* <li className="header__nav-list-item">Розмістити оголошення</li> */}
                </ul>

                <div className="header__button">
                    <button className="button">Вхід</button>
                    <button className="button">Реєстрація</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;