import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const newProductCard = (props) => {
    console.log(props.ColumStart,props.ColumEnd, props.rowStart,props.rowEnd)


    // styled class new-product-card
    const NewProductCard = styled.div`

        // Animation slide left infite 

        @keyframes slide-left {
            0% {
                transform: translateX(0);
            }
            50% {
                transform: translateX(-100%);
            }

            62% {
                transform: translateX(0);
            }
            

            100% {
                transform: translateX(100%);
            }

           

        }

        grid-column-start: ${props.ColumStart};
        grid-column-end: ${props.ColumEnd};
        grid-row-start: ${props.rowStart};
        grid-row-end: ${props.rowEnd};
        background-color: #f7f7f7;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 4px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        position: relative;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        text-align: center;
        color: #555;
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
        line-height: 1.5;
        z-index: -1;
        overflow: hidden;
        transition: all 0.3s ease;
       
    }
        
    
        `;
    

    return (  
        <NewProductCard>  
        <div className="new-product-card">
        <div className="newProductCard">
        </div>
        <div className='newProduct-Image'>
        </div>
        <div className='newProduct-info'>
        </div>
         </div>   
        </NewProductCard>
    );
}

export default newProductCard;