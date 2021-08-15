import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import * as Falicons from 'react-icons/fa';
import * as Ailicons from 'react-icons/ai';

const Header = () => {
    const [sidebar, setSidebar] = useState(false)
    const [products, setProducts] = useState(false)
    const [cart, setCart] = useState(false)
    const [user, setUser] = useState(false)


    const showSidebar = () => setSidebar(!sidebar)
    const showProducts = () => setProducts(!products)
    const showCart = () => setCart(!cart)
    const showUser = () => setUser(!user)

    return (
        <Container>
        <Link to='#' className='menu'>
            <Falicons.FaBars className='icons-menu' onClick={showSidebar} />
            </Link> 
            <span className='legenda'> @DyeVibe </span>
           
            <Link to='#' className="shop-bag">
            <Falicons.FaShoppingBag className='shop-bag' onClick={showCart}/>
            </Link>
            <Link to='#' className='user-icon' >
            <Falicons.FaUserCircle className="user-icon"  onClick={showUser}/>
            </Link> 
            <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='nav-items'>
                <Link to='#' className='menu-item'> Home
                <Falicons.FaStore className='menu-home'/> 
                </Link>
                </li>
                <li className='nav-items'>
                <Link to='#' className='menu-item'> Newsletter
                <Falicons.FaStore className='menu-new'/> 
                </Link>
                </li>
                <li className='nav-items'>
                  <Link to='#' className='menu-item'> Perfil
                <Falicons.FaStore className='menu-perfil'/>
                </Link>
                </li>
                <li className='nav-items'>
                <Link to='#' className='menu-item' onClick={showProducts} > Produtos
                <Falicons.FaStore className='menu-produtos'/> 
                </Link>    
                </li>
                <li className={'nav-items'}> 
                <Link to='#' className={sidebar && products ?  'product_item':'product_item_'}> Blusas 
                </Link>  
                </li>
                <li className={'nav-items'}> 
                <Link to='#' className={sidebar && products ?  'product_item':'product_item_'}> Camisas
                </Link>  
                </li>
                <li className={'nav-items'}> 
                <Link to='#' className={sidebar && products ?  'product_item':'product_item_'}> Calças
                </Link>  
                </li>
                <li className={'nav-items'}> 
                <Link to='#' className={sidebar && products ?  'product_item':'product_item_'}> Bones 
                </Link>  
                </li>
             </ul>      
            </nav>
            <div className={cart ?  'cart-shop' : 'cart-shop_'} >
            </div>
            <div className={ user ? 'user-info' : 'user-info_' }  >
            </div>
        </Container>
    )
};

export default Header;
