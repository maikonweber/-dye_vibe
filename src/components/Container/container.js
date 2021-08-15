import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    width: 100vw;
    height: 190vh;
    position: absolute;
    top: 65px;
    left: 50px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(18, 1fr);
    grid-gap: 10px;

`;

export default Container;
