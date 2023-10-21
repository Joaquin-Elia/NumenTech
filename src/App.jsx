import CartContext from './context/CartContext';
import Home from './components/Home/Home'
import Carrousel from './components/Carrousel/Carrousel'
import Footer from './components/footer/Footer'
import CardList from './components/cards/CardList';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <>
      <CartContext>
        <Home/>
        <CardList />
        <Navbar />
        <Carrousel/>
        <Footer />
      </CartContext>
    </>
  )}

export default App
