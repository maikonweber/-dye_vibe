import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 3fr);
    height: 60px;
    background: #312F2F;
    width: 100vw;    

    .icons-menu {
        font-size: 35px;
        position: relative;
        left: 10px;
        top: 10px;
        color: #85FFFF;
    }

    .shop-bag {
        position: relative;
        top: 5px;
        left: 29px;
        grid-column: 9/10;
        font-size : 35px;
        color: #85FFFF;
    }


    `
;