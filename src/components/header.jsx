import {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';

import DarkModeSwitch from './darkModeSwitch.jsx';

import '../styles/header.css';

const Header = () =>{

    const [itemsInShopCart, setItemsInShopCart] = useState([]);

    

    return(
        <header className="header">
            <div className="mobile-logo-menu" onClick={() => document.getElementById('header-ul').classList.toggle('visible')}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            <ul id="header-ul">
                <li><a href="/Home">Home</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/FAQ">FAQ</a></li>
            </ul>
            
            <div className="icon-container config" id="configButton" onClick={() => document.getElementById('configButton').classList.toggle('active')}>
                <div className="dark-mode-switch-container">
                    <h1>Dark mode</h1>
                    <DarkModeSwitch/>
                </div>
                <FontAwesomeIcon className="cog-icon icon" icon={faCog}/>
            </div>

            <div className="icon-container shop" onClick={() => document.getElementById('dropdown-shop-card').classList.toggle('visible')}>
                <FontAwesomeIcon className="shop-icon icon" icon={faShoppingCart}/> 
            </div>
            
            <div className="dropdown-shop-card" id="dropdown-shop-card">
                <h1 className="empty-cart">{ !itemsInShopCart.length ? 'Your shop cart is empty' : itemsInShopCart.map((item) => item)}</h1>
                <div className="empty-cart-icon-container">
                    <FontAwesomeIcon className="empty-cart-icon" icon={faCartPlus}/>
                </div>
            </div>
        </header>
    )
}

export default Header;