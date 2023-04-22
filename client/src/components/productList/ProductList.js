import mainImage from '../../image/mainPage/mainPage.jpg';

import './ProductList.css';

const ProductList = () => {
    return (
        <div className="product__container">
            <ul className="product__list">
                <li className="product__item">
                    <img className='product__item-main-image' src={mainImage} alt="hause" />
                    <div >
                        <span className='product__item-price'>15000$</span>
                        <span className='product__item-price-one-metr'>150$ за м2</span>
                        <h3 className='product__item-title'>Столичне шосе</h3>
                    </div>
                    <div>
                        <span className='product__item-adress'>Берестейка</span>
                        <span className='product__item-rooms'>3 кімнати</span>
                        <span className='product__item-rooms'>5 поверх</span>
                    </div>                   
                    <p className='product__item-description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eveniet! Explicabo eos labore placeat tempora sit illum accusamus quae nulla eius magni totam harum, odio omnis iste itaque nisi saepe?
                    </p>

                </li>
                <li className="product__item"></li>
                <li className="product__item"></li>
                <li className="product__item"></li>
                <li className="product__item"></li>
                <li className="product__item"></li>
                <li className="product__item"></li>
                <li className="product__item"></li>
                <li className="product__item"></li>
                <li className="product__item"></li>
            </ul>
        </div>
    )
}

export default ProductList;