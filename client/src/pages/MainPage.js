import mainImage from '../image/mainPage/mainPage.jpg'

import './mainPage.css'
const MainPage = () => {
    return (
        <main className='mainPage'>
            <div className='mainPage__overlay'></div>
            <img src={mainImage} className='mainPage__img' alt="House in mountain" />
            <div className="mainPage__nav">
                <a href='#' className="button mainPage__nav__button">Вхід</a>
                <a href='#' className="button mainPage__nav__button">Реєстрація</a>
                <a href='#' className="button mainPage__nav__button">Огляд пропозицій</a>
            </div>
        </main>
    )
}

export default MainPage;