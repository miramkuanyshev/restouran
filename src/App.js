import logo from './logo.svg';
import './App.css';
import Card from './components/elements/card';
import Header from './components/elements/header';
import {products} from './components/elements/products'

function App() {
  return (
    <div className="main">
      <div className="container">
        <Header/>
        <div className="menu">
          {products.map(key => {
            return (
              <Card
              url={key.img}
              title={key.name}
              description={key.description} 
              pricePay={key.price}
              priceAmmount={key.weight}            
              />
            )
          })}

        </div>        
      </div>
    </div>
  );
}

export default App;
