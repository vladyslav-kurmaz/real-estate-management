import { Link } from 'react-router-dom';

import mainImage from '../image/mainPage/mainPage.jpg';

import './mainPage.css'
import Header from "../components/header/header";
const MainPage = ({form}) => {

    const onActiveForm = (e) => {
        form(() => e.target.getAttribute('data-open'))
    }

    return (
        <>
        <Header form={form}/>
        <main className='mainPage'>
            <div className='mainPage__overlay'></div>
            <img src={mainImage} className='mainPage__img' alt="House in mountain" />
            <div className="mainPage__nav">
                <Link to={`/login`} 
                    className="button mainPage__nav__button" 
                    data-open='Enter'
                    onClick={onActiveForm}>Вхід</Link>
                <Link to={'/singup'} 
                    className="button mainPage__nav__button" 
                    data-open='SingUp'
                    onClick={onActiveForm}>Реєстрація</Link>
                <Link to={'/productpage'} className="button mainPage__nav__button">Огляд пропозицій</Link>
            </div>
        </main>
            </>
    )
}

export default MainPage;