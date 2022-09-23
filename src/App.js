import './App.css';
import Products from './pages/Products';
import Basket from './pages/Basket';
import Dish from './pages/Dish';
import { Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Products />} />
      <Route path='/basket' element={<Basket />} />
      <Route path='/:name' element={<Dish />} />
    </Routes>


  );
}

export default App;
