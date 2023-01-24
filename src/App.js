import './App.css';
import Products from './pages/Products';
import Basket from './pages/Basket';
import Dish from './pages/Dish';
import LoginForm from './pages/enter';
import RegForm from './pages/Reg';
import { Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={<RegForm/>}/>
      <Route path='/auth' element={<LoginForm/>}/>
      <Route path='/products' element={<Products />} />
      <Route path='/basket' element={<Basket />} />
      <Route path='/:name' element={<Dish />} />
    </Routes>


  );
}

export default App;
