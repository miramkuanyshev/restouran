import './header.css';
function Header () {
    return (
      <div className="header">
        <h1 className="header__title">наша продукция</h1>
        <div className="header-basket">
            <span className="header-basket__description">3 товара на сумму 3 500 ₽</span>
            <img  src="images/basket-icon.png" alt="Иконка корзины" className="header-basket__icon"/> 
        </div>

      </div>
    );
}

export default Header;