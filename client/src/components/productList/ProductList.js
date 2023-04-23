import { Link } from "react-router-dom";
import Spinner from "../spiner/spiner";


import "./ProductList.css";
import notImage from "../../image/notImage.png";
import { useEffect, useState } from "react";


import { getApartments } from "../services/http";

const ProductList = ({filter, dataFilter, tempData}) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    // const [filterData, setFilterData] = useState(dataFilter());

    useEffect(() => {
        setLoading(true);
        getApartments()
            .then(setData)
            .then(() => setLoading(false));
    },[])

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
  


  const renderItem = (data) => {
    console.log(dataFilter);
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
        <li className="product__item" key={_id}>
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
//   const allData = renderItem(dataFilter === '' ? data : dataFilter);
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
