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
        </div>
      </div>
    </div>
  );
}

export default DebetCart;
