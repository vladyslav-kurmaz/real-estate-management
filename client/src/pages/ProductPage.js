import SearchRental from "../components/searchRental/searchRental";
import Filter from "../components/filter/Filter";
import ProductList from "../components/productList/ProductList";

import './ProductPage.css';

const ProductsPage = () => {
    return (
        <>
            <main className="product-page">
                <SearchRental/>
                <div className="product-page__content">
                    <Filter/>
                    <ProductList/>
                </div>
                
                
            </main>
        </>
    )
}

export default ProductsPage;