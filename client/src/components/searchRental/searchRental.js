import './seachRental.css';

const SearchRental = () => {
    return (
        <div className='find'>
            <input 
                // ref={searchInput}
                type="text" 
                className="find__input" 
                // value={temp}
                // onChange={onChangeTemp} 
                placeholder="Find character by name"
                // onClick={handleClick}
                // onBlur={() => setData([])}
                />
        </div>
    )
};

export default SearchRental;