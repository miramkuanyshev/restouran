
import './products.css';
import Card from '../components/elements/card';
import { products } from '../components/elements/products';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthButton from '../components/ui/authorizationbtn'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ExitUser } from '../store/reduces/user'

function Products() {
  const counter = useSelector(state => state.basket.counter);
  const sum = useSelector(state => state.basket.sum);
  const dispach = useDispatch();
  const navigate = useNavigate();
  function Exit() {
    dispach(ExitUser())
    navigate('/auth')

  }

  return (
    <div className="main">
      <div className="container">
        <div className="header">
          <h1 className="header__title">наша продукция</h1>
          <div className="header-basket">
            <div className="header-basket__counter counter">
              <span className="counter__product"> {counter} товара </span>
              <span className="counter__price">на сумму {sum} ₽</span>
            </div>
            <Link to={'/basket'} className="header-basket__button"></Link>
            <AuthButton name='Выйти' type={'exit'} handleClick={Exit} />
          </div>

        </div>
        <div className="menu">
          {products.map((item, index) => {
            const { id, img, name, description, price, weight } = item;
            return (
              <Link to={`/${name}`} key={index}>
                <Card
                  key={id}
                  id={id}
                  img={img}
                  name={name}
                  description={description}
                  pricePay={price}
                  priceAmmount={weight}
                />
              </Link>
            )
          })}

        </div>
      </div>
    </div>
  );
}

export default Products;