import { Link } from 'react-router-dom';

import mainImage from '../image/mainPage/mainPage.jpg';

import './mainPage.css'
const MainPage = () => {
    return (
        <main className='mainPage'>
            <div className='mainPage__overlay'></div>
            <img src={mainImage} className='mainPage__img' alt="House in mountain" />
            <div className="mainPage__nav">
                <Link to={`/exit`} className="button mainPage__nav__button">Вхід</Link>
                <Link to={'/singup'} className="button mainPage__nav__button">Реєстрація</Link>
                <Link to={'/allproposition'} className="button mainPage__nav__button">Огляд пропозицій</Link>
            </div>
        </main>
    )
}

export default MainPage;