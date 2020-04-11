import React from 'react';
import styled from 'styled-components';
import drinking from '../img/drinking_greif_op.png';
import { Link } from 'gatsby';

const Wrapper = styled.footer`
    background: #950210;
    padding: 100px 20px 50px 20px;
    box-sizing: border-box;
    text-align: center;
`
const Drinking = styled.img`
    max-width: 150px;
    height: auto;
    width: 90%;
`
const A = styled(Link)`
    color: #fff;
    display: block;
    margin-top: 20px;
    &:hover, &:active, &:visited {
        color: #fff;
        text-decoration: underline;
    }
`
const SubHeading = styled.h2`
  color: #ddd;
  font-family: 'Fjalla One';
  display: block;
  margin: 0;
  padding: 20px 0 0 0;
  box-sizing: border-box;
`

const Copy = styled.div`
    margin-top: 10px;
    color: #fff;
`

const Footer = () => (
    <Wrapper>
        <Drinking src={drinking} alt="Drinking Greif" />
        <A to="/impressum">Impressum</A>
        <Copy>Red Foxes United</Copy>
        <SubHeading>
          <span role="img" aria-label="Fussball">⚽</span>
          <span role="img" aria-label="Bratwurst">🌭</span>
          <span role="img" aria-label="Bier">🍺</span>
           since 2007
        </SubHeading>
    </Wrapper>
);

export default Footer;