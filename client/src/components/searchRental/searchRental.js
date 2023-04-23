import { useState } from 'react';

import './seachRental.css';

const SearchRental = ({fn}) => {
    const [temp, setTemp] = useState('');

    const onChangeTemp = (e) => {
        setTemp(e.target.value);
        fn(e.target.value);
    }
    

    return (
        <div className='find'>
            <input 
                // ref={searchInput}
                type="text" 
                className="find__input" 
                value={temp}
                onChange={onChangeTemp} 
                placeholder="Find character by name"
                // onClick={handleClick}
                // onBlur={() => setData([])}
                />
        </div>
    )
};

export default SearchRental;