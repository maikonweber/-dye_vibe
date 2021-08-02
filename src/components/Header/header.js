import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import * as Falicons from 'react-icons/fa';
import * as Ailicons from 'react-icons/ai';

const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <Container>
        <Link to='#' className='menu'>
            <Falicons.FaBars className='icons-menu' onClick={showSidebar} />
            </Link> 
            <Link to='#' className="shop-bag">
             <Falicons.FaShoppingBag className='shop-bag'/>
             </Link>
             <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
             <ul className='nac-menu-items'>
                <li className='nav-menu-items'>
                    <Link to='#' className='menu-bars' >
                        <Falicons.FaTimes className='x-icon' > </Falicons.FaTimes>
                    </Link>
                    <Link to='#' className='user' >
                        <Falicons.FaUserCircle className="user-icon"></Falicons.FaUserCircle>
                    </Link>
                </li>
             </ul>      
            </nav>   
        </Container>
    )
};

export default Header;
