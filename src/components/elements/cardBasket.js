import './cardBasket.css';
import Button from '../ui/button';
import { removeProductBasket, workingCounter, changeSum } from '../../store/reduces/basket';
import { useDispatch } from 'react-redux';





function CardBasket({ id, img, name, description, price, priceAmmount }) {

  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(removeProductBasket(id))
    dispatch(workingCounter(-1));
    dispatch(changeSum(-price));
  }

  return (
    <div className="basket">
      <img src={img} alt="Изобржение блюда" className="basket__prewiev" />
      <h3 className="basket__title">{name}</h3>
      <div className="basket-price">
        <span className="basket-price__pay">{price} ₽</span>
        <Button handleClick={(event) => event.preventDefault(handleDeleteProduct())} type={'close'}/>
      </div>
    </div>
  );
}

export default CardBasket;