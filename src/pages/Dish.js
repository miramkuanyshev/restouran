import './dishDescr.css';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/ui/button';
import { useSelector } from 'react-redux'
import CardInfo from '../components/elements/cardinfo';
import { Link } from 'react-router-dom'
import { products } from '../components/elements/products';

function Dish() {
    const navigate = useNavigate();

    function BackButton() {
        navigate(-1);
    }


    const counter = useSelector(state => state.basket.counter);
    const sum = useSelector(state => state.basket.sum);
    const { name } = useParams();
    const post = products.find(key => key.name === name);


    return (
        <div className="descr-main">
            <div className="descr-container">
                <header className='descr-header'>
                    <Button handleClick={BackButton} type={'back'} />
                    <div className="descr-header__counter dish">
                        <div className="dish-block">
                        <span className="dish-block__product"> {counter} товара </span>
                        <span className="dish-block__price">на сумму {sum} ₽</span>
                        </div>
                        <Link to={'/basket'} className="header-basket__button"></Link>                        
                    </div>
                </header>
                <div className="descr-card">
                    <CardInfo
                        key={post.id}
                        id={post.id}
                        url={post.img}
                        name={post.name}
                        description={post.description}
                        pricePay={post.price}
                        priceAmmount={post.weight}
                    />
                </div>
            </div>
        </div>
    )
}

export default Dish;

