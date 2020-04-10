import React from 'react';
import '../style.css';
import styled from 'styled-components';
import NextGame from '../components/bundesliga/nextGame';
import Standings from '../components/bundesliga/standings';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #A31602;
`
const Bundesliga = () => (
    <Wrapper>
        <NextGame />
        <Standings />
    </Wrapper>
);

export default Bundesliga;

