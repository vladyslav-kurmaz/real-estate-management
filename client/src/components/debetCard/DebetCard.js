import "./debetCard.css";

function DebetCart() {
  return (
    <div className="card">
      <div className="container">
        <div className="card__inner">
          <h2 className="card__title">
            Додати карту
          </h2>
          <p className="card__descr">Введіть номер карти</p>
          <input
            placeholder="****************"
            className="card__input"
            type="text"
          />

          <div className="card__date-container">
            <div className="card__date-block">
              <p className="card__descr">Введіть строк дії карти</p>
              <input
                placeholder="**"
                className="card__input card__date"
                type="text"
              />
              <input
                placeholder="**"
                className="card__input card__date"
                type="text"
              />
            </div>
            <div className="card__code">
              <p className="card__descr">Введіть CVС код</p>
              <input
                placeholder="***"
                className="card__input card__cvv"
                type="password"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DebetCart;
