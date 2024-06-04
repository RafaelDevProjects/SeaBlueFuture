import React, { useState } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { MobileNav } from '../MobileNav/MobileNav';

const Navbar = () => {
    
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <nav className="nav-wrappere">
                <div className="nav-contente">
                    <img className="logo" src={"src/assets/images/logo.png"} alt="Logo" />

                    <ul>
                        <li>
                            <Link className="menu-item" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="menu-item" to="/doacoes">Doações</Link>
                        </li>
                        <li>
                            <Link className="menu-item" to="/noticias">Notícias</Link>
                        </li>
                    </ul>

                    <button className="menu-btn" onClick={toggleMenu}>
                        <span className="material-symbols-outlined" style={{ fontSize: '1.8rem' }}>
                            {openMenu ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;