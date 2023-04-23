import "./allproducts.css";
import React from "react";

const AllProducts = () => {
  return (
    <>
      <div className="allproducts">
        <div className="container">
          <div className="allproducts__inner">
            <h2 className="allproducts__title">Інформація</h2>
            <div className="allproducts__container">
              <div className="allproducts__box">
                <h3 className="allproducts__name"> Оголошення</h3>
                <ul className="allproducts__list">
                  <li className="allproducts__item">
                    <div className="allproducts__info">
                      <div className="allproducts__products__img-box">
                        <img
                          src="./image"
                          alt="product"
                          className="allproducts__products-img"
                        />
                      </div>
                      <div className="allproducts__products__info-box">
                        <h1 className="allproducts__item-name">
                          Назва нерухомості
                        </h1>
                        <p className="allproducts__item-descr">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Dolores eius ipsum aspernatur! Necessitatibus,
                          quos? Rerum veniam veritatis dolores maxime quas
                          repudiandae mollitia a alias adipisci temporibus.
                          Distinctio numquam quibusdam magni!
                        </p>
                        <div className="allproducts__item-information">
                          <ul className="allproducts__item-list">
                            <li className="allproducts__item-item">
                              <h3 className="allprosucts__name-title">
                                Площа :
                              </h3>
                              <div className="allprosucts__item-num">10 m2</div>
                            </li>
                            <li className="allprosucts__item-item">
                              <h3 className="allprosucts__name-title">
                                Кількість кімнат :
                              </h3>
                              <div className="allprosucts__item-num">4</div>
                            </li>
                            <li className="allprosucts__item-item">
                              <h3 className="allprosucts__name-title">
                                Стан :
                              </h3>
                              <div className="allprosucts__item-num">
                                Відмінний
                              </div>
                            </li>
                          </ul>
                          <div className="allprosucts__item-adres-box">
                            <h4 className="allprosucts__item-adres-title">
                              Адреса :
                            </h4>
                            <p className="allprosucts__item-adres">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Porro aliquam earum officiis.
                            </p>
                          </div>

                          <div className="allprosucts__item-descriptions-box">
                            <h4 className="allprosucts__item-descriptions-title">
                              Примітки :
                            </h4>
                            <ul className="allprosucts__item-descriptions-list">
                              <li className="allprosucts__item-descriptions-item">
                                descr1
                              </li>
                              <li className="allprosucts__item-descriptions-item">
                                descr2
                              </li>
                            </ul>
                          </div>
                          <div className="allprosucts__item-price">
                            1300
                            <p>Грн</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="allproducts__box">
                <h3 className="allproducts__name"> В оренді</h3>
                <ul className="allproducts__list">
                  <li className="allproducts__item">
                    <div className="allproducts__info">
                      <div className="allproducts__products__img-box">
                        <img
                          src="./image"
                          alt="product"
                          className="allproducts__products-img"
                        />
                      </div>
                      <div className="allproducts__products__info-box">
                        <h1 className="allproducts__item-name">
                          Назва нерухомості
                        </h1>
                        <p className="allproducts__item-descr">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Dolores eius ipsum aspernatur! Necessitatibus,
                          quos? Rerum veniam veritatis dolores maxime quas
                          repudiandae mollitia a alias adipisci temporibus.
                          Distinctio numquam quibusdam magni!
                        </p>
                        <div className="allproducts__item-information">
                          <ul className="allproducts__item-list">
                            <li className="allproducts__item-item">
                              <h3 className="allprosucts__name-title">
                                Площа :
                              </h3>
                              <div className="allprosucts__item-num">10 m2</div>
                            </li>
                            <li className="allprosucts__item-item">
                              <h3 className="allprosucts__name-title">
                                Кількість кімнат :
                              </h3>
                              <div className="allprosucts__item-num">4</div>
                            </li>
                            <li className="allprosucts__item-item">
                              <h3 className="allprosucts__name-title">
                                Стан :
                              </h3>
                              <div className="allprosucts__item-num">
                                Відмінний
                              </div>
                            </li>
                          </ul>
                          <div className="allprosucts__item-adres-box">
                            <h4 className="allprosucts__item-adres-title">
                              Адреса :
                            </h4>
                            <p className="allprosucts__item-adres">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Porro aliquam earum officiis.
                            </p>
                          </div>

                          <div className="allprosucts__item-descriptions-box">
                            <h4 className="allprosucts__item-descriptions-title">
                              Примітки :
                            </h4>
                            <ul className="allprosucts__item-descriptions-list">
                              <li className="allprosucts__item-descriptions-item">
                                descr1
                              </li>
                              <li className="allprosucts__item-descriptions-item">
                                descr2
                              </li>
                            </ul>
                          </div>
                          <div className="allprosucts__item-price">
                            1300
                            <p>Грн</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="allproducts__item">
                    <div className="allproducts__info">
                      <div className="allproducts__products__img-box">
                        <img
                          src="./image"
                          alt="product"
                          className="allproducts__products-img"
                        />
                      </div>
                      <div className="allproducts__products__info-box">
                        <h1 className="allproducts__item-name">
                          Назва нерухомості
                        </h1>
                        <p className="allproducts__item-descr">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Dolores eius ipsum aspernatur! Necessitatibus,
                          quos? Rerum veniam veritatis dolores maxime quas
                          repudiandae mollitia a alias adipisci temporibus.
                          Distinctio numquam quibusdam magni!
                        </p>
                        <div className="allproducts__item-information">
                          <ul className="allproducts__item-list">
                            <li className="allproducts__item-item">
                              <h3 className="allprosucts__name-title">
                                Площа :
                              </h3>
                              <div className="allprosucts__item-num">10 m2</div>
                            </li>
                            <li className="allprosucts__item-item">
                              <h3 className="allprosucts__name-title">
                                Кількість кімнат :
                              </h3>
                              <div className="allprosucts__item-num">4</div>
                            </li>
                            <li className="allprosucts__item-item">
                              <h3 className="allprosucts__name-title">
                                Стан :
                              </h3>
                              <div className="allprosucts__item-num">
                                Відмінний
                              </div>
                            </li>
                          </ul>
                          <div className="allprosucts__item-adres-box">
                            <h4 className="allprosucts__item-adres-title">
                              Адреса :
                            </h4>
                            <p className="allprosucts__item-adres">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Porro aliquam earum officiis.
                            </p>
                          </div>

                          <div className="allprosucts__item-descriptions-box">
                            <h4 className="allprosucts__item-descriptions-title">
                              Примітки :
                            </h4>
                            <ul className="allprosucts__item-descriptions-list">
                              <li className="allprosucts__item-descriptions-item">
                                descr1
                              </li>
                              <li className="allprosucts__item-descriptions-item">
                                descr2
                              </li>
                            </ul>
                          </div>
                          <div className="allprosucts__item-price">
                            1300
                            <p>Грн</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
