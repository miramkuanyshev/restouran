import './Basket.css';
import CardBasket from '../components/elements/cardBasket';
import { useSelector } from 'react-redux';
import Button from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import AuthButton from '../components/ui/authorizationbtn';
import { Link } from 'react-router-dom';


function Basket() {

  const basket = useSelector(state => state.basket.basket);
  const sum = useSelector(state => state.basket.sum);
  const navigate = useNavigate();

  function BackButton() {
    navigate(-1);
  }


  return (
    <div className="basket-main">
      <div className="basket-container">
        <header className='basket-header'>
          <Button handleClick={BackButton} type={'back'} />
          <h1 className="basket-header__title">Корзина с выбранными товарами</h1>
        </header>
        <section className='product'>
          {basket.map((item, index) => {
            const { id, img, name, description, price, weight } = item;
            return (
              <Link to={`/${name}`} key={index}>
                  <CardBasket
                  key={id}
                  id={id}
                  img={img}
                  name={name}
                  price={price}
                  description={description}
                  priceAmmount={weight}
                />
              </Link>
            )
          })}
        </section>
      </div>
      <hr className='line' />
      <section className='making'>
        <div className="making-sum">
          <span className="making-sum__text"> Заказ на сумму: </span><span className="making-sum__price">{sum}₽</span>
        </div>
        <div className="making-btn">
          <AuthButton name='Оформить заказ' />
        </div>
      </section>
    </div>

  );
}

export default Basket;