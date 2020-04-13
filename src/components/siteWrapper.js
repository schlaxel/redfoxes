import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Footer from './footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro';
  }
  h1, h2, h3, h4, h5, h6 {
      text-align: center;
      font-family: 'Fjalla One';
  }
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: solid 10px #950210;
`
const TopBorder = styled.div`
  width: 100%;
  height: 10px;
  background: #950210;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
`

const SiteWrapper = ({ children }) => (
    <Wrapper>
        <GlobalStyle />
        <TopBorder />
        {children}
        <Footer />
    </Wrapper>
);

export default SiteWrapper;
