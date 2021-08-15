// Function Component
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import NewProductCard from './newProductCard';

const ProductCard = () => {
    
    const Container = styled.div`
        display: grid;
        position: relative;
        top: 40vh;
        width: 100%;
        height: 40vh;
        grid-template-columns: 2fr 0.2fr 2fr 0.2fr 2fr;
        grid-template-rows: 1fr 1fr ;
        min-width: 40%;

        @media (max-width: 1200px) {
            div {
                max-width: 80%;

            }
        @media (max-width: 2400px) {
            div {
                width: 60%;        
        }
`;

   
    return (
        <Container>
            <NewProductCard ColumStart={1} ColumEnd={2} rowStart={1} rowEnd={3} />
            <NewProductCard ColumStart={3} ColumEnd={4} rowStart={1} rowEnd={3} />
            <NewProductCard ColumStart={5} ColumEnd={8} rowStart={1} rowEnd={3} />
        
        </Container>
       );
};

export default ProductCard;