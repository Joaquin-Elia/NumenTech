import CartContext from './context/CartContext';
import Home from './components/Home/Home'
import Carrousel from './components/Carrousel/Carrousel'
import './App.css';

function App() {

  return (
    <>
      <CartContext />
      <Home/>
      <Carrousel/>
    </>
  )}

export default App;