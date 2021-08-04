import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 3fr);
    height: 60px;
    background: #312F2F;
    width: 100vw;

    .legenda {
        color: red;
        font-size: 35px;
        grid-column: 5/6;
        position: relative;
        top: 5px;
        left: 15px;
    }

    .icons-menu {
        grid-column: 1/2;
        font-size: 35px;
        color: #85FFFF;
        position: relative;
        top: 10px;
        left: 10px;
    }

    .shop-bag {
        position: relative;
        top: 5px;
        left: 29px;
        grid-column: 9/10;
        font-size : 35px;
        color: #85FFFF;
    }
    .user-icon {
        grid-column: 10/10;
        font-size: 35px;
        color: #85FFFF;
        position: relative;
        left: 15px;
        top: 6px;
    }

    .nav-menu {
        justify-content:start;
        align-items: center;
       
    }

    .nav-menu-active {
        height: 100vw;
        background: #312F2F;
        width: 20vw;
    }

    .menu-item {
        font-size: 20px;
        position: relative;
        top: 30px;
        color: #85FFFF;
        left: 13px;
    }

    .menu-home {
        position: relative;
        color: #85FFFF;
        left: 20px;
    }

    .menu-new {
        position: relative;
        left:110px;
        top: -20px;
    }

    .menu-produtos {
        position: relative;
        left: 100px;
        top: -20px;
    }

    .menu-pefil {
        position: relative;
        left: 20px;
    }

    `
;