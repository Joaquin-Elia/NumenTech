import { useState } from "react";
import './Navbar.css'

const Navbar = () => {
    const [menuClick, setMenuClick] = useState(false);
    const handleClick = () => setMenuClick(!menuClick);

    return (
        <>
            <header className="navbar-container">
                <a className="navbar-logo" href="#">NumenTech</a>
                
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
                    <ul className={menuClick ? 'nav-menu menu-active' : 'nav-menu'}>
                        <li className="nav-links"><a onClick={() => setMenuClick(false)} href="#">Inicio</a></li>
                        <li className="nav-links"><a onClick={() => setMenuClick(false)} href="#">Productos</a></li>
                        <li className="nav-links"><a onClick={() => setMenuClick(false)} href="#">Noticias</a></li>
                        <li className="nav-links"><a onClick={() => setMenuClick(false)} href="#">Contacto</a></li>
                    </ul>
                </nav>
                
                <div className="navbar-cart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                </div>
            </header>
        </>
    )
}

export default Navbar;