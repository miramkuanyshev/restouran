import './App.css';
import Products from './pages/Products';
import Basket from './pages/Basket';
import Dish from './pages/Dish';
import LoginForm from './pages/enter';
import RegForm from './pages/Reg';
import NotFounded from './pages/NotFounded';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {

  const Auth = useSelector((state) => state.user.IsAuth)  

  return (
    (Auth?
    <Routes>      
      <Route path='/products' element={<Products />} />
      <Route path='/basket' element={<Basket />} />
      <Route path='/:name' element={<Dish />} />
      <Route path='/' element={<RegForm/>}/>
      <Route path='/auth' element={<LoginForm/>}/>
    </Routes>:
    <Routes>
      <Route path='/' element={<RegForm/>}/>
      <Route path='/auth' element={<LoginForm/>}/>
      <Route path="*" element={<NotFounded/>} />
    </Routes>)
  );
}

export default App;
