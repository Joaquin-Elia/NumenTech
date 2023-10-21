import CartContext from './context/CartContext';
import Home from './components/Home/Home'
import Carrousel from './components/Carrousel/Carrousel'
import Footer from './components/footer/Footer'
import './App.css';


function App() {
  return (
    <>
      <Home/>
      <CartContext />
      <Carrousel/>
      <Footer />
    </>
  )}

export default App
