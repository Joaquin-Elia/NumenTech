import { useContext } from "react"
import { CartProvider } from "../../context/CartContext"
import Cards from './Cards'

const CardList = () => {
  const value = useContext(CartProvider)
  const {products, addToCart} = value;
  
  return (
    <>
        <Cards products={products} addToCart={addToCart}/>
    </>
  )
}

export default CardList;
