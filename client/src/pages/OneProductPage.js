import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOneApartment } from "../components/services/http";
import Spinner from "../components/spiner/spiner";

import "./OneProductPage.css";
import notImage from '../image/notImage.png';

const OneProductPage = () => {
  const [data, setData] = useState({})
  const {productId} = useParams()

  const navigation = useNavigate();
  const goBack = () => navigation(-1)

  useEffect(() => {
    getIdOneApartment()
  }, [])  

  const getIdOneApartment = () => {
    getOneApartment(productId)
      .then(res => setData(res))
  }

  const statusTranslate = (status) => {
    switch(status) {
        case 'for-sale':
            return 'Продається';
        case 'sold':
            return 'Продано';
        case 'surrendered':
            return 'Здає\'ться';
        case 'appear':
            return 'Оренда';
        case 'archived':
            return 'Архівовано';
    }
}

  const renderItem = ({photos, name, description, address, rooms, squareArea, price, status}) => {
    // const photo = photos?.length === 0 ? notImage : photos[0]
    return (
        <div className="cart__inner">
          <button onClick={() => goBack()} className="cart__button-back" >Повернутися до списку</button>
          <div className="cart__img-box">
            <img src="./image" alt="cart" className="cart__img" />
          </div>
          <div className="cart__info">
            <h1 className="cart__name">{name}</h1>
            <p className="cart__descr">
              {description}
            </p>
            <div className="cart__information">
              <ul className="cart__list">
                <li className="cart__item">
                  <h3 className="cart__item-title">Площа: </h3>
                  <div className="cart__num">{squareArea} m2</div>
                </li>
                <li className="cart__item">
                  <h3 className="cart__item-title">Кількість кімнат: </h3>
                  <div className="cart__num">{rooms}</div>
                </li>
                <li className="cart__item">
                  <h3 className="cart__item-title">Статус :</h3>
                  <div className="cart__num">{statusTranslate(status)}</div>
                </li>
              </ul>
              <div className="cart__adres-box">
                <h4 className="cart__adres-title">Адреса: </h4>
                <p className="cart__adres">
                  {address}
                </p>
              </div>

              {/* <div className="cart__descriptions-box">
                <h4 className="cart__descriptions-title">Примітки :</h4>
                <ul className="cart__descriptions-list">
                  <li className="cart__descriptions-item">descr1</li>
                  <li className="cart__descriptions-item">descr2</li>
                </ul>
              </div> */}
              <div className="cart__price">
                {price}
                <p>$</p>
              </div>
              <button className="cart__btn">Орендувати</button>
            </div>
          </div>
        </div>
    )
  }

  return (
    <>
      <div className="cart">
        <div className="container">
          {renderItem(data)}
        </div>
      </div>
    </>
  );
};

export default OneProductPage;
