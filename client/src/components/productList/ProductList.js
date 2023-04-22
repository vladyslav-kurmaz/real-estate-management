import { Link } from 'react-router-dom';

import mainImage from '../../image/mainPage/mainPage.jpg';

import './ProductList.css';
import {useEffect, useState} from "react";
<<<<<<< HEAD
import {getApartments} from "../../http";
=======
import {fetchApartments} from "../services/http";
>>>>>>> 53bc3b2ed19f00988acf67ffa0b5d7013f899f1b

const ProductList = () => {
    const [data, setData] = useState({})

    useEffect(() => {
<<<<<<< HEAD
        getApartments().then(setData)
=======
        fetchApartments().then(setData);
        console.log(data);
>>>>>>> 53bc3b2ed19f00988acf67ffa0b5d7013f899f1b
    },[])

    

    return (
        <div className="product__container">
            <ul className="product__list">
                <li className="product__item">
                    <Link to={`/productpage/:productId`} className="">
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
                    </Link>
                    
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