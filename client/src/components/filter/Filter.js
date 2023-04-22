

import './filter.css';

const Filter = () => {

    const onActive = (e) => {
        e.target.parentElement.childNodes.forEach(item => item.classList.remove('filter__item-active'));
        e.target.classList.add('filter__item-active');
    } 

    return (
        <div className="filter">
            <h2 className='filter__title'>Фільтр</h2>
            <ul className="filter__list">
                <li className="filter__item" onClick={(e) => onActive(e)}>Всі оголошення</li>
                <li className="filter__item" onClick={(e) => onActive(e)}>Продаються</li>
                <li className="filter__item" onClick={(e) =>onActive(e)}>Здаються</li>
                <li className="filter__item" onClick={(e) =>onActive(e)}>Продані</li>
                <li className="filter__item" onClick={(e) =>onActive(e)}>Здані</li>
            </ul>
        </div>
    )
}

export default Filter;