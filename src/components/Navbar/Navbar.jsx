import { useState, useEffect, useRef, useCallback } from "react";
import CartModal from "./CartModal";
import LogoSvg from "../../assets/imgs/logo";
import { CartProvider } from "../../context/CartContext";
import { useContext } from "react";
import './Navbar.css';

const Navbar = () => {
    const [menuClick, setMenuClick] = useState(false);
    const handleClick = useCallback(() => setMenuClick(prevMenuClick => !prevMenuClick), []);
    const [cartModal, setCartModal] = useState(false);
    const [changeNavbar, setChangeNavbar] = useState(false);
    const menuLinks = [
        {name: 'Inicio', link: ''}, 
        {name: 'Productos', link: 'products'}, 
        {name: 'Galería', link: 'gallery'}, 
        {name: 'Contacto', link: 'contact'}
    ];
    const ref = useRef(null);

    const value = useContext(CartProvider);
    const {cart} = value;
    const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

    // changing navbar background on scroll
    useEffect(() => {
        const changeNavbarBg = () =>{
            if(window.scrollY >= 50)
                setChangeNavbar(true);
            else
                setChangeNavbar(false);
        }

        window.addEventListener('scroll', changeNavbarBg);
    }, [changeNavbar]);

    // if user clicks outside the menu, it closes
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuClick && ref.current && !ref.current.contains(e.target)) {
                handleClick();
            }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [menuClick, handleClick]);

    const closeModal = () => setCartModal(false);
    const showModal = () => setCartModal(true);
    
    return (
        <>
            <header ref={ref} className={changeNavbar ? "navbar-container navbar-active" : 'navbar-container'}>
                <a className="navbar-logo" href="#">
                    <LogoSvg changeNavbar={changeNavbar} menuClick={menuClick} />
                </a>
                
                <div className={menuClick ? 'menu-icons icon-color' : 'menu-icons'} onClick={handleClick}>
                    {menuClick ? 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                            :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    }
                </div>

                <nav className="container-links">
                    <ul  className={menuClick ? 'nav-menu menu-active' : 'nav-menu'}>
                        {menuLinks.map(({name, link}, i) => 
                            <li
                                key={i} 
                                className="nav-links"
                            >
                                <a  
                                    className={changeNavbar ? "nav-links-a nav-links-active" : "nav-links-a"}
                                    onClick={() => setMenuClick(false)} 
                                    href={`#${link}`}
                                >
                                    {name}
                                </a>
                            </li>    
                        )}
                    </ul>
                </nav>
                
                <div className="navbar-cart" onClick={showModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    {cart.length >= 1 &&
                        <div className="cart-count">
                            {itemsInCart}
                        </div>
                    }
                </div>
                <CartModal cartModal={cartModal} closeModal={closeModal}/>
            </header>
        </>
    )
}

export default Navbar;