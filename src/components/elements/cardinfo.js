import './cardinfo.css'
import AuthButton from '../../components/ui/authorizationbtn';
import { useDispatch } from 'react-redux';
import { addProduct, workingCounter, changeSum } from '../../store/reduces/basket'
import { v4 as uuidv4 } from 'uuid';


function CardInfo({ id, url, name, description, pricePay, priceAmmount }) {

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
    <div className="card-info">
      <img src={url} alt="Блюдо" className="card-info__img" />
      <div className="card-info__product information">
        <h3 className="information__title">{name}</h3>
        <p className="information__descr">{description} Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений.</p>
        <div className="information-price">
          <span className="information-price__cost">{pricePay}₽</span>
          <span className="information-price__weight">/{priceAmmount}</span>
          <AuthButton type={'buy'} name={'В корзину'} handleClick={handleAddProduct}/>
        </div>
      </div>
    </div>
  )
}

export default CardInfo