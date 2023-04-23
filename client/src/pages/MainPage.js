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
                <p className='dream'>Dream House</p>
                <p className='better'>Краще не знайдеш</p>
            </div>
        </main>
            </>
    )
}

export default MainPage;