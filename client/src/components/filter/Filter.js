import { useState, useEffect } from 'react';


import './filter.css';

const Filter = ({fn}) => {
  // const [status, setStatus] = useState('');

  const updateStatus = (e) => {};

  const onActive = (e) => {
    e.target.parentElement.childNodes.forEach((item) =>
      item.classList.remove("filter__item-active")
    );
    e.target.classList.add("filter__item-active");
    fn(() => e.target.getAttribute("data-status"));
  };

 

  return (
    <div className="filter  reveal">
      <h2 className="filter__title">Фільтр</h2>
      <ul className="filter__list">
        <li
          className="filter__item filter__item-active"
          onClick={(e) => onActive(e)}
          data-status=""
        >
          Всі оголошення
        </li>
        <li
          className="filter__item"
          onClick={(e) => onActive(e)}
          data-status="for-sale"
        >
          Продаються
        </li>
        <li
          className="filter__item"
          onClick={(e) => onActive(e)}
          data-status="appear"
        >
          Здаються
        </li>
        <li
          className="filter__item"
          onClick={(e) => onActive(e)}
          data-status="sold"
        >
          Продані
        </li>
        <li
          className="filter__item"
          onClick={(e) => onActive(e)}
          data-status="surrendered"
        >
          Здані
        </li>
        <li
          className="filter__item"
          onClick={(e) => onActive(e)}
          data-status="archived"
        >
          Архівовано
        </li>
      </ul>
    </div>
  );
}

export default Filter;