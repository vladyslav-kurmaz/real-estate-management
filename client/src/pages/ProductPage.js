import { useState, useEffect } from "react";

import SearchRental from "../components/searchRental/searchRental";
import Filter from "../components/filter/Filter";
import ProductList from "../components/productList/ProductList";
import { getApartmentsByStatus, getApartmentsByName } from "../components/services/http";

import './ProductPage.css';

const ProductsPage = () => {

    const [filter, setFilter] = useState('');
    const [dataFilter, setDataFilter] = useState('');
    const [temp, setTemp] = useState('');
    const [tempData, setTempData] = useState('');

    const onActive = (e) => {
        e.target.parentElement.childNodes.forEach(item => item.classList.remove('product__pagination-item-active'));
        e.target.classList.add('product__pagination-item-active');
    } 

    useEffect(() => {
        if (filter !== '') {
            getApartmentsByStatus(filter)
                .then(res => setDataFilter(res))
        } else {
            setDataFilter('')
        }
    }, [filter])

    useEffect(() => {
        if (filter !== '') {
            getApartmentsByName(temp)
                .then(res => setTempData(res))
        } else {
            setTempData('')
        }
    }, [temp])

    return (
        <>
            <main className="product-page">
                <SearchRental fn={setTemp}/>
                <div className="product-page__content">
                    <Filter fn={setFilter}/>
                    <ProductList filter={filter} dataFilter={dataFilter} tempData={tempData}/>
                </div>
                
                <div className='product__pagination'>
                <ul className='product__pagination-list'>
                    <li className='product__pagination-item product__pagination-item-active' onClick={onActive}>1</li>
                    <li className='product__pagination-item' onClick={onActive}>2</li>
                </ul>
            </div>
            </main>
        </>
    )
}

export default ProductsPage;