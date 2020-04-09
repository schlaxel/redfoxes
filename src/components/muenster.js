import React from 'react';
import styled from 'styled-components';
import frbg from '../img/muenster.png';

const Wrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    box-sizing: border-box;
    margin: auto;
`
const Image = styled.img`
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    margin-top: 0px;
`

const Muenster = () => (
    <Wrapper>
        <Image src={frbg} alt="Freiburg" />
    </Wrapper>
);

export default Muenster;
