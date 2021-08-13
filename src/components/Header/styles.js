import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    background: #161925;
    width: 100vw;

    @keyframes brigthBorder {
        0% {box-shadow: 0px 0px 10px  #E2CFEA;}
        25% {box-shadow: 0px 0px 10px  #004FFF;}
        50% {box-shadow: 0px 0px 10px  #F433AB;}
        75% {box-shadow: 0px 0px 10px  #21D19F;}
        100% {box-shadow: 0px 0px 10px #E2CFEA;}
    }

    @keyframes brigthColor {
        0% {color: #E2CFEA;}
        25% {color: #004FFF;}
        50% {color: #F433AB;}
        75% {color: #21D19F;}
        100% {color: #E2CFEA;}    
    }

    /* Create slide left animation for header menubar */
    @keyframes slideLeft {
        0% {transform: translateX(0px);}
        100% {transform: translateX(-100px);}
    }

    .legenda {
        color: #E2CFEA;
        font-size: 35px;
        position: relative;
        top: 5px;
        left: 40vw;
        animation: brigthColor 3s infinite;
        
    }

    .wrap-header-icons {
        position: absolute;
        top: 0;
        left: 10vw;

    }

    .icons-menu {
        font-size: 35px;
        color: #E2CFEA;
        position: relative;
        top: 10px;
        left: 10px;
        animation: brigthColor 3s infinite;
        border-radius: 10px;
        
    }

    .shop-bag {
        position: relative;
        top: 5px;
        left: 38vw;
        font-size : 35px;
        color: #E2CFEA;
        animation: brigthColor 3s infinite;

    }

    .user-icon {
        font-size: 35px;
        color: #E2CFEA;
        position: relative;
        left: 40vw;
        top: 5px;
        animation: brigthColor 3s infinite;    
}

    .nav-menu {
        justify-content:start;
        align-items: center;
        visibility: hidden;

       
    }

    .nav-menu-active {
        margin-left: -10px;
        margin-top: -60px;
        background: #161925;
        width: 200px;
        height: 900px;
        border-radius: 5px;
        border: 2px solid #E2CFEA;
        visibility: visible;
        animation: brigthBorder 3s infinite;

    }

    .menu-item {
        font-size: 20px;        
        position: relative;
        top: 90px;
        color: #E2CFEA;
        left: 30px;
        padding: 10px;  
        margin-top: 10px;

    }

    
    `;