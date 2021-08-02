import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import * as Falicons from 'react-icons/fa';

const Header = () => {

    return (
        <Container>
        <Link to='#' className='menu'>
            <Falicons.FaBars className='icons-menu' />
            </Link>
            <Link to='/' clasName='shop-bag' >
            <Falicons.FaShoppingBag className='shop-bag'/>
            </Link>
            
        </Container>
    )
};

export default Header;
