import { useParams } from "react-router-dom";

import "./OneProductPage.css";

const OneProductPage = () => {
  return (
    <>
      <div className="cart">
        <div className="container">
          <div className="cart__inner">
            <div className="cart__img-box">
              <img src="./image" alt="cart" className="cart__img" />
            </div>
            <div className="cart__info">
              <h1 className="cart__name">Назва нерухомості</h1>
              <p className="cart__descr">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores eius ipsum aspernatur! Necessitatibus, quos? Rerum
                veniam veritatis dolores maxime quas repudiandae mollitia a
                alias adipisci temporibus. Distinctio numquam quibusdam magni!
              </p>
              <div className="cart__information">
                <ul className="cart__list">
                  <li className="cart__item">
                    <h3 className="cart__item-title">Площа :</h3>
                    <div className="cart__num">10 m2</div>
                  </li>
                  <li className="cart__item">
                    <h3 className="cart__item-title">Кількість кімнат :</h3>
                    <div className="cart__num">4</div>
                  </li>
                  <li className="cart__item">
                    <h3 className="cart__item-title">Стан :</h3>
                    <div className="cart__num">Відмінний</div>
                  </li>
                </ul>
                <div className="cart__adres-box">
                  <h4 className="cart__adres-title">Адреса :</h4>
                  <p className="cart__adres">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Porro aliquam earum officiis.
                  </p>
                </div>

                <div className="cart__descriptions-box">
                  <h4 className="cart__descriptions-title">Примітки :</h4>
                  <ul className="cart__descriptions-list">
                    <li className="cart__descriptions-item">descr1</li>
                    <li className="cart__descriptions-item">descr2</li>
                  </ul>
                </div>
                <div className="cart__price">
                  1300
                  <p>Грн</p>
                </div>
                <button className="cart__btn">Орендувати</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneProductPage;
