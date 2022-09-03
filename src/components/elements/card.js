import './card.css';

function Card({url, title, description, pricePay, priceAmmount}) {
    return (
      <div className="card">
        <img src={url} alt="Изобржение блюда" className="card__prewiev" />
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <div className="card-price">
          <p className="card-price__pay">{pricePay} ₽<span className="card-price__ammount">/ {priceAmmount}</span></p>
          <button className="card-price__btn">+</button>
        </div>    
      </div>
    );
}

export default Card;