import './card.css';
import { useDispatch } from 'react-redux';
import { addProduct, workingCounter, changeSum } from '../../store/reduces/basket'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function Card({ id, url, name, description, pricePay, priceAmmount }) {

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    let item = {
      id: uuidv4(),
      img: url,
      name: name,
      price: pricePay,
      description: description,
      weight: priceAmmount
    }

    dispatch(addProduct(item));
    dispatch(workingCounter(1));
    dispatch(changeSum(+item.price));

  }

  return (
    <div className="card">
      <img src={url} alt="Изобржение блюда" className="card__prewiev" />
      <h3 className="card__title">{name}</h3>
      <p className="card__description">{description}</p>
      <div className="card-price">
        <p className="card-price__pay">{pricePay} ₽<span className="card-price__ammount">/ {priceAmmount}</span></p>
        <button onClick={(event) => event.preventDefault(handleAddProduct())} className="card-price__btn"></button>
      </div>
    </div>

  );
}

export default Card;