import mainImage from '../../image/mainPage/mainPage.jpg';

import './ProductList.css';
import {useEffect, useState} from "react";
import {fetchApartments} from "../../http";

const ProductList = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        fetchApartments().then(setData)
    },[])


    return (
        <div className="product__container">
            <ul className="product__list">
                <li className="product__item">
                    <img className='product__item-main-image' src={mainImage} alt="hause" />
                    <div>
                        <div className='product__item-container-price'>
                            <span className='product__item-price'>15000$</span>
                            <h3 className='product__item-title product__item-price'>Столичне шосе</h3>
                        </div>
                        <div className='product__item-info-container'>
                            <span className='product__item-info'>Берестейка</span>
                            <span className='product__item-info'>3 кімнати</span>
                            <span className='product__item-info'>5 поверх</span>
                        </div>                   
                        <p className='product__item-description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eveniet! Explicabo eos labore placeat tempora sit illum accusamus quae nulla eius magni totam harum, odio omnis iste itaque nisi saepe?
                        </p>
                    </div>
                </li>
                <li className="product__item">
                    <img className='product__item-main-image' src={mainImage} alt="hause" />
                    <div>
                        <div className='product__item-container-price'>
                            <span className='product__item-price'>15000$</span>
                            <h3 className='product__item-title product__item-price'>Столичне шосе</h3>
                        </div>
                        <div className='product__item-info-container'>
                            <span className='product__item-info'>Берестейка</span>
                            <span className='product__item-info'>3 кімнати</span>
                            <span className='product__item-info'>5 поверх</span>
                        </div>                   
                        <p className='product__item-description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eveniet! Explicabo eos labore placeat tempora sit illum accusamus quae nulla eius magni totam harum, odio omnis iste itaque nisi saepe?
                        </p>
                    </div>
                </li>
                <li className="product__item">
                    <img className='product__item-main-image' src={mainImage} alt="hause" />
                    <div>
                        <div className='product__item-container-price'>
                            <span className='product__item-price'>15000$</span>
                            <h3 className='product__item-title product__item-price'>Столичне шосе</h3>
                        </div>
                        <div className='product__item-info-container'>
                            <span className='product__item-info'>Берестейка</span>
                            <span className='product__item-info'>3 кімнати</span>
                            <span className='product__item-info'>5 поверх</span>
                        </div>                   
                        <p className='product__item-description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eveniet! Explicabo eos labore placeat tempora sit illum accusamus quae nulla eius magni totam harum, odio omnis iste itaque nisi saepe?
                        </p>
                    </div>
                </li>
                <li className="product__item">
                    <img className='product__item-main-image' src={mainImage} alt="hause" />
                    <div>
                        <div className='product__item-container-price'>
                            <span className='product__item-price'>15000$</span>
                            <h3 className='product__item-title product__item-price'>Столичне шосе</h3>
                        </div>
                        <div className='product__item-info-container'>
                            <span className='product__item-info'>Берестейка</span>
                            <span className='product__item-info'>3 кімнати</span>
                            <span className='product__item-info'>5 поверх</span>
                        </div>                   
                        <p className='product__item-description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eveniet! Explicabo eos labore placeat tempora sit illum accusamus quae nulla eius magni totam harum, odio omnis iste itaque nisi saepe?
                        </p>
                    </div>
                </li>
                <li className="product__item">
                    <img className='product__item-main-image' src={mainImage} alt="hause" />
                    <div>
                        <div className='product__item-container-price'>
                            <span className='product__item-price'>15000$</span>
                            <h3 className='product__item-title product__item-price'>Столичне шосе</h3>
                        </div>
                        <div className='product__item-info-container'>
                            <span className='product__item-info'>Берестейка</span>
                            <span className='product__item-info'>3 кімнати</span>
                            <span className='product__item-info'>5 поверх</span>
                        </div>                   
                        <p className='product__item-description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eveniet! Explicabo eos labore placeat tempora sit illum accusamus quae nulla eius magni totam harum, odio omnis iste itaque nisi saepe?
                        </p>
                    </div>
                </li>
                <li className="product__item">
                    <img className='product__item-main-image' src={mainImage} alt="hause" />
                    <div>
                        <div className='product__item-container-price'>
                            <span className='product__item-price'>15000$</span>
                            <h3 className='product__item-title product__item-price'>Столичне шосе</h3>
                        </div>
                        <div className='product__item-info-container'>
                            <span className='product__item-info'>Берестейка</span>
                            <span className='product__item-info'>3 кімнати</span>
                            <span className='product__item-info'>5 поверх</span>
                        </div>                   
                        <p className='product__item-description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eveniet! Explicabo eos labore placeat tempora sit illum accusamus quae nulla eius magni totam harum, odio omnis iste itaque nisi saepe?
                        </p>
                    </div>
                </li>
                <li className="product__item">
                    <img className='product__item-main-image' src={mainImage} alt="hause" />
                    <div>
                        <div className='product__item-container-price'>
                            <span className='product__item-price'>15000$</span>
                            <h3 className='product__item-title product__item-price'>Столичне шосе</h3>
                        </div>
                        <div className='product__item-info-container'>
                            <span className='product__item-info'>Берестейка</span>
                            <span className='product__item-info'>3 кімнати</span>
                            <span className='product__item-info'>5 поверх</span>
                        </div>                   
                        <p className='product__item-description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eveniet! Explicabo eos labore placeat tempora sit illum accusamus quae nulla eius magni totam harum, odio omnis iste itaque nisi saepe?
                        </p>
                    </div>
                </li>
                <li className="product__item">
                    <img className='product__item-main-image' src={mainImage} alt="hause" />
                    <div>
                        <div className='product__item-container-price'>
                            <span className='product__item-price'>15000$</span>
                            <h3 className='product__item-title product__item-price'>Столичне шосе</h3>
                        </div>
                        <div className='product__item-info-container'>
                            <span className='product__item-info'>Берестейка</span>
                            <span className='product__item-info'>3 кімнати</span>
                            <span className='product__item-info'>5 поверх</span>
                        </div>                   
                        <p className='product__item-description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eveniet! Explicabo eos labore placeat tempora sit illum accusamus quae nulla eius magni totam harum, odio omnis iste itaque nisi saepe?
                        </p>
                    </div>
                </li>
                <li className="product__item">
                    <img className='product__item-main-image' src={mainImage} alt="hause" />
                    <div>
                        <div className='product__item-container-price'>
                            <span className='product__item-price'>15000$</span>
                            <h3 className='product__item-title product__item-price'>Столичне шосе</h3>
                        </div>
                        <div className='product__item-info-container'>
                            <span className='product__item-info'>Берестейка</span>
                            <span className='product__item-info'>3 кімнати</span>
                            <span className='product__item-info'>5 поверх</span>
                        </div>                   
                        <p className='product__item-description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eveniet! Explicabo eos labore placeat tempora sit illum accusamus quae nulla eius magni totam harum, odio omnis iste itaque nisi saepe?
                        </p>
                    </div>
                </li>
                <li className="product__item">
                    <img className='product__item-main-image' src={mainImage} alt="hause" />
                    <div>
                        <div className='product__item-container-price'>
                            <span className='product__item-price'>15000$</span>
                            <h3 className='product__item-title product__item-price'>Столичне шосе</h3>
                        </div>
                        <div className='product__item-info-container'>
                            <span className='product__item-info'>Берестейка</span>
                            <span className='product__item-info'>3 кімнати</span>
                            <span className='product__item-info'>5 поверх</span>
                        </div>                   
                        <p className='product__item-description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eveniet! Explicabo eos labore placeat tempora sit illum accusamus quae nulla eius magni totam harum, odio omnis iste itaque nisi saepe?
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ProductList;