import CartContext from './context/CartContext';
import Home from './components/Home/Home'
import Carrousel from './components/Carrousel/Carrousel'
import Footer from './components/footer/Footer'
import Cards from './components/cards/Cards'
import './App.css';

function App() {
  return (
    <>
      <CartContext />
      <Home/>
      <Carrousel/>
      <Footer />
      <Cards/>
    </>
  )}

export default App
