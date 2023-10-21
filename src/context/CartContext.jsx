import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import CardList from "../components/cards/CardList";
import Navbar from '../components/Navbar/Navbar'

export const CartProvider = createContext();

const CartContext = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const getProducts = async(url) => {
        const res = await axios.get(url)
        setProducts(res.data)
    };

    useEffect(() => {
        getProducts('http://localhost:3000/products');
    }, []);

    const addToCart = (id) => {
        const prodInCart = cart.findIndex(item => item.id === id);
        
        if (prodInCart >= 0) {
            const newCart = [...cart];
            newCart[prodInCart] = {
                ...newCart[prodInCart],
                quantity: newCart[prodInCart].quantity +1
            };
            setCart(newCart);
        } else {
            const productToAdd = products.find(prod => prod.id === id);
            productToAdd && 
                setCart(prevCart => [...prevCart, { ...productToAdd, quantity: 1 }]);    
        }
    };

    const deleteProduct = (id) => {
        const newCart = [...cart];
        const itemIndex = newCart.findIndex(item => item.id === id);
    
        if (itemIndex !== -1) {
            if (newCart[itemIndex].quantity > 1) 
                newCart[itemIndex] = {...newCart[itemIndex], quantity: newCart[itemIndex].quantity - 1 };
            
            else 
                newCart.splice(itemIndex, 1);

            setCart(newCart);
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    
    useEffect(() => {
        const totalCart = () => {
            const calculate = cart.reduce((prev, item) => 
                prev + (item.quantity * item.price), 0)
            setTotal(Math.round(calculate))
        }
        totalCart()
    }, [cart])

    const values= {
        products: products,
        addToCart: addToCart,
        cart: cart,
        deleteProduct: deleteProduct,
        clearCart: clearCart,
        totalCart: total
    }

  return (
        <CartProvider.Provider value={values}>
            <CardList />
            <Navbar />
        </CartProvider.Provider>
  )
}

export default CartContext;