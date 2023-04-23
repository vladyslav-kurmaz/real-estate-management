import { Link } from "react-router-dom";
import Spinner from "../spiner/spiner";


import "./ProductList.css";
import notImage from "../../image/notImage.png";
import { useEffect, useState } from "react";

import { getApartments, getApartmentsByStatus } from "../services/http";

const ProductList = ({filter, dataFilter, tempData, setPagination, numPagi}) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);



  useEffect(() => {
    // console.log(pagination);
    setLoading(true);
    // getApartmentsByStatus()
    getApartments()
      .then((data) => {
        setData(data);
        setPagination(data.totalPages)
    })
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    
    getApartments(`?page=${numPagi}`)
            .then(res => setData(res))
  }, [numPagi])


  const statusTranslate = (status) => {
    switch (status) {
      case "for-sale":
        return "Продається";
      case "sold":
        return "Продано";
      case "surrendered":
        return "Здає'ться";
      case "appear":
        return "Оренда";
      case "archived":
        return "Архівовано";
    }
  };

   

    const renderItem = (data) => {

        /**Animation */
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
                } else {
                reveals[i].classList.remove("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        reveal();
        /**Animation */


    return data.apartments?.map((flat) => {
      const {
        _id,
        address,
        description,
        name,
        photos,
        price,
        rooms,
        squareArea,
        status,
      } = flat;
      const photo = photos.length === 0 ? notImage : photos[0];
      return (
        <li className="product__item reveal" key={_id}>
          <Link to={`/productpage/${_id}`}>
            <img className="product__item-main-image" src={photo} alt={name} />
            <div>
              <div className="product__item-container-price">
                <span className="product__item-price">{price}$</span>
                <h3 className="product__item-title product__item-price">
                  {name}
                </h3>
              </div>
              <div className="product__item-info-container">
                <span className="product__item-info">{address}</span>
                <span className="product__item-info">{rooms} кімнати</span>
                <span className="product__item-info">{squareArea} m2</span>
              </div>
              <p className="product__item-description">{description}</p>
            </div>
            <div className="product__item-status">
              {statusTranslate(status)}
            </div>
          </Link>
        </li>
      );
    });
  };


  const spiner = loading ? <Spinner/> : null;
  const content = !loading && data ? renderItem(dataFilter === '' ? data : dataFilter) : null


  return (
    <div className="product__container">
      <ul className="product__list">
        {spiner}
        {content}
      </ul>
    </div>
  );
};

export default ProductList;
