import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import * as Falicons from 'react-icons/fa';
import * as Ailicons from 'react-icons/ai';

const Header = () => {
    const [sidebar, setSidebar] = useState(false)
    const [products, setProducts] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    const showProducts = () => setProducts(!products)

    return (
        <Container>
           
        <Link to='#' className='menu'>
            <Falicons.FaBars className='icons-menu' onClick={showSidebar} />
            </Link> 
            ,<div className={'wrap-header-icons'}>
            <Link to='#' className="shop-bag">
            <Falicons.FaShoppingBag className='shop-bag'/>
            </Link>
            <Link to='#' className='user-icon' >
            <Falicons.FaUserCircle className="user-icon"/>
            </Link>
            </div>
            <span className='legenda'> @DyeVibe </span>
            <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='nav-menu-items'>
                <Link to='#' className='menu-item'> Home
                <Falicons.FaStore className='menu-home'/> 
                </Link>
                </li>
                <li className='nav-menu-items'>
                <Link to='#' className='menu-item'> Newsletter
                <Falicons.FaStore className='menu-new'/> 
                </Link>
                </li>
                <li className='nav-menu-items'>
                <Link to='#' className='menu-item'> Produtos
                <Falicons.FaStore className='menu-produtos'/> 
                </Link>
                </li>
                <li className='nav-menu-items'>
                <Link to='#' className='menu-item'> Perfil
                <Falicons.FaStore className='menu-perfil'/>
                </Link>
                </li>
             </ul>      
            </nav>   
        </Container>
    )
};

export default Header;
