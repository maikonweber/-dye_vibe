import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    background: #161925;
    width: 100%;
    max-width: 100%;
    border-bottom: 1px solid #E2CFEA; 
    animation: brightBorder 0.5s infinite ;  
    box-shadow: 0px 0px 10px rgba(#e2cfea);

    @keyframes brigthBorder {
        0% {box-shadow: 0px 0px 10px 2px #E2CFEA;}
        25% {box-shadow: 0px 0px 10px 2px #004FFF;}
        50% {box-shadow: 0px 0px 10px 2px #F433AB;}
        75% {box-shadow: 0px 0px 10px 2px #21D19F;}
        100% {box-shadow: 0px 0px 10px 2px #E2CFEA;}
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
        0% {transform: translateX(30px);}
        100% {transform: translateX(-900px);}
    }

     /* Create slide right animation for header menubar */
    @keyframes slideRight {
        0% {transform: translateX(-30px);}
        100% {transform: translateX(100px);}
    }


    .legenda {
        color: #E2CFEA;
        font-size: 35px;
        position: relative;
        top: 5px;
        left: 20%;
        animation: brigthColor 3s infinite;
        
    }

    .wrap-header-icons {
        position: absolute;
        top: 0px;
        left: 82%;
        background: #161925;
        width: 200px;
        height: 50px;

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
        position: absolute;
        top: 5px;
        left: 80%;
        font-size : 35px;
        color: #E2CFEA;
        animation: brigthColor 3s infinite;

    }

    .user-icon {
        font-size: 35px;
        color: #E2CFEA;
        position: absolute;
        left: 85%;
        top: 5px;
        animation: brigthColor 3s infinite;    
}

    .nav-menu {
        justify-content:start;
        align-items: center;
        visibility: hidden;
        animation: slideLeft 3s ;

       
    }

    .nav-menu-active {
        z-index: 2;
        margin-left: -10px;
        margin-top: -60px;
        background: #161925;
        width: 200px;
        height: 110vh;
        border-radius: 5px;
        border: 2px solid #E2CFEA;
        visibility: visible;
        box-shadow: #e2cfea 0px 0px 10px;
        animation: brigthBorder 3s infinite;
        animation: slideRigth 3s ;

    }

    .menu-item  {
        font-size: 25px;
        color: #E2CFEA;
        position: relative;
        top: 70px;
        left: 22px;
        animation: brigthColor 3s infinite;
      
    }
  
    .product_item_ {
        visibility: hidden;
        display: none;
    }
    
    .nav-items {
        padding: 12px;
    }   

    .product_item {
        font-size: 25px;
        color: #E2CFEA;
        position: relative;
        top: 80px;
        left: 40px;
        animation: brigthColor 3s infinite;
    }

    .cart-shop {
        background: #161925;
        color: #E2CFEA;
        width: 240px;
        height: 320px;
        position: absolute;
        top: 5%;
        left: 67.2%;
        visibility: visible;
    }

    .cart-shop_ {
        background: #161925;
        color: #E2CFEA;
        width: 240px;
        height: 320px;
        position: absolute;
        top: 5%;
        left: 67.2%;
        visibility: hidden;
    }

    .user-info {
        background: #161925;
        color: #E2CFEA;
        width: 240px;
        height: 320px;
        position: absolute;
        top: 5%;
        left: 67.2%;
        visibility: visible;

    }

    .user-info_ {
        background: #161925;
        color: #E2CFEA;
        width: 240px;
        height: 320px;
        position: absolute;
        top: 6%;
        left: 67.2%;
        visibility: hidden;        
      
    }

        
        `;

