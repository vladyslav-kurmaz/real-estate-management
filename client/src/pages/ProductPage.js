import SearchRental from "../components/searchRental/searchRental";
import Filter from "../components/filter/Filter";
import ProductList from "../components/productList/ProductList";

import './ProductPage.css';

const ProductsPage = () => {
    const onActive = (e) => {
        e.target.parentElement.childNodes.forEach(item => item.classList.remove('product__pagination-item-active'));
        e.target.classList.add('product__pagination-item-active');
    } 
    return (
        <>
            <main className="product-page">
                <SearchRental/>
                <div className="product-page__content">
                    <Filter/>
                    <ProductList/>
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