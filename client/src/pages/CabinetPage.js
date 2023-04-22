import "./cabinetPage.css";
import showImg from "../image/show.svg";
import React from "react";
const CabinetPage = () => {
  const [showPass, setShowPass] = React.useState(false);

  let isShow = "password";
  if (showPass) {
    isShow = "text";
  } else {
    isShow = "password";
  }

  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };

  return (
    <>
      <div className="cabinet">
        <div className="container">
          <div className="cabinet__inner">
            <div className="cabinet__top">
              <div className="cabinet__box">
                <img src="./images" alt="avatar" className="cabinet__img" />
                <div className="cabinet__top-box">
                  <h3 className="cabinet__top-name">Name</h3>
                  <p className="cabinet__top-mail">wgwgw@gsfew.wewf</p>
                  <div className="cabinet__pass-box">
                    <input
                      readOnly
                      type={isShow}
                      value={"gwfwfwef"}
                      className="cabinet__pass"
                    />
                    <button
                      onClick={handleShowPass}
                      className="cabinet__show-pass"
                    >
                      <img src={showImg} className="cabinet__show-img" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <button className="cabinet__logout">Вийти з аккаунту</button>
            </div>
            <h2 className="cabinet__title">Ваші оголошення</h2>
            <ul className="cabinet__products-list">
              <li className="cabinet__products__item">
                <div className="cabinet__products__img-box">
                  <img
                    src="./image"
                    alt="product"
                    className="cabinet__products-img"
                  />
                </div>
                <div className="cabinet__products__info-box">
                  <h1 className="cabinet__item-name">Назва нерухомості</h1>
                  <p className="cabinet__item-descr">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolores eius ipsum aspernatur! Necessitatibus, quos? Rerum
                    veniam veritatis dolores maxime quas repudiandae mollitia a
                    alias adipisci temporibus. Distinctio numquam quibusdam
                    magni!
                  </p>
                  <div className="cabinet__item-information">
                    <ul className="cabinet__item-list">
                      <li className="cabinet__item-item">
                        <h3 className="cabinet__item-item-title">Площа :</h3>
                        <div className="cabinet__item-num">10 m2</div>
                      </li>
                      <li className="cabinet__item-item">
                        <h3 className="cabinet__item-item-title">
                          Кількість кімнат :
                        </h3>
                        <div className="cabinet__item-num">4</div>
                      </li>
                      <li className="cabinet__item-item">
                        <h3 className="cabinet__item-item-title">Стан :</h3>
                        <div className="cabinet__item-num">Відмінний</div>
                      </li>
                    </ul>
                    <div className="cabinet__item-adres-box">
                      <h4 className="cabinet__item-adres-title">Адреса :</h4>
                      <p className="cabinet__item-adres">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Porro aliquam earum officiis.
                      </p>
                    </div>

                    <div className="cabinet__item-descriptions-box">
                      <h4 className="cabinet__item-descriptions-title">
                        Примітки :
                      </h4>
                      <ul className="cabinet__item-descriptions-list">
                        <li className="cabinet__item-descriptions-item">
                          descr1
                        </li>
                        <li className="cabinet__item-descriptions-item">
                          descr2
                        </li>
                      </ul>
                    </div>
                    <div className="cabinet__item-price">
                      1300
                      <p>Грн</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cabinet__products__item">
                <div className="cabinet__products__img-box">
                  <img
                    src="./image"
                    alt="product"
                    className="cabinet__products-img"
                  />
                </div>
                <div className="cabinet__products__info-box">
                  <h1 className="cabinet__item-name">Назва нерухомості</h1>
                  <p className="cabinet__item-descr">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolores eius ipsum aspernatur! Necessitatibus, quos? Rerum
                    veniam veritatis dolores maxime quas repudiandae mollitia a
                    alias adipisci temporibus. Distinctio numquam quibusdam
                    magni!
                  </p>
                  <div className="cabinet__item-information">
                    <ul className="cabinet__item-list">
                      <li className="cabinet__item-item">
                        <h3 className="cabinet__item-item-title">Площа :</h3>
                        <div className="cabinet__item-num">10 m2</div>
                      </li>
                      <li className="cabinet__item-item">
                        <h3 className="cabinet__item-item-title">
                          Кількість кімнат :
                        </h3>
                        <div className="cabinet__item-num">4</div>
                      </li>
                      <li className="cabinet__item-item">
                        <h3 className="cabinet__item-item-title">Стан :</h3>
                        <div className="cabinet__item-num">Відмінний</div>
                      </li>
                    </ul>
                    <div className="cabinet__item-adres-box">
                      <h4 className="cabinet__item-adres-title">Адреса :</h4>
                      <p className="cabinet__item-adres">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Porro aliquam earum officiis.
                      </p>
                    </div>

                    <div className="cabinet__item-descriptions-box">
                      <h4 className="cabinet__item-descriptions-title">
                        Примітки :
                      </h4>
                      <ul className="cabinet__item-descriptions-list">
                        <li className="cabinet__item-descriptions-item">
                          descr1
                        </li>
                        <li className="cabinet__item-descriptions-item">
                          descr2
                        </li>
                      </ul>
                    </div>
                    <div className="cabinet__item-price">
                      1300
                      <p>Грн</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CabinetPage;
