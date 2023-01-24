import './header.css';
import Button from '../ui/button'

function Header({ title }) {
  return (
    <div className="header">
      <Button type='back' className="header__button" />
      <h1 className="header__title">{title}</h1>
      <div className="header-basket">
        <span className="header-basket__description">3 товара на сумму 3 500 ₽</span>
        <img src="images/basket-icon.png" alt="Иконка корзины" className="header-basket__icon" />
      </div>

    </div>
  );
}

export default Header;