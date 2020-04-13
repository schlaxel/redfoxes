import React from 'react';
import styled from 'styled-components';
import { FacebookWithCircle, InstagramWithCircle } from 'styled-icons/entypo-social';
import drinking from '../img/drinking_greif_op.png';
import { Link } from 'gatsby';

const Wrapper = styled.footer`
    background: #950210;
    padding: 100px 20px 50px 20px;
    box-sizing: border-box;
    text-align: center;
    margin-top: 50px;
    @media (max-width: 1000px) {
        margin-top: 0px;
    }
`
const Drinking = styled.img`
    max-width: 150px;
    height: auto;
    width: 90%;
`
const A = styled(Link)`
    color: #fff;
    display: block;
    margin: 20px 5px 0 5px;
    font-family: 'fjalla one';
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
const Hr = styled.hr`
    width: 120px;
    height: 3px;
    border: 0;
    border-top: dashed 3px rgba(255,255,255,0.5);
    margin: 30px auto;
`
const CreditToMyself = styled.a`
    display: block;
    color: #ddd;
    font-size: 1.2em;
    font-family: 'fjalla one';
`
const Gari = styled.span`
    display: block;
    font-size: 1em;
    color: #ddd;
    margin-top: 5px;
`
const Nav = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 300px;
    margin: auto;
`
const Social = styled.div`
`
const SA = styled.a`
    color: #fff;
    padding: 20px 5px 5px 5px;
    display: inline-block;
`

const Footer = () => (
    <Wrapper>
        <Drinking src={drinking} alt="Drinking Greif" />
        <Nav>
            <A to="/">Home</A>
            <A to="/blog">Blog</A>
            <A to="/about">About</A>
            <A to="/impressum">Impressum</A>
        </Nav>
        <Social>
            <SA href="https://instagram.com/redfoxesunited" target="_blank"><InstagramWithCircle size="40" /></SA>
            <SA href="https://facebook.com/redfoxesunited" target="_blank"><FacebookWithCircle size="40" /></SA>
        </Social>
        <Copy>Red Foxes United</Copy>
        <SubHeading>
          <span role="img" aria-label="Fussball">⚽</span>
          <span role="img" aria-label="Bratwurst">🌭</span>
          <span role="img" aria-label="Bier">🍺 </span> 
           seit 2007
        </SubHeading>
        <Hr />
        <CreditToMyself target="_blank" href="https://www.kiefer.media">Kiefer.Media</CreditToMyself>
        <Gari>Gari lifestyle since 1992</Gari>
    </Wrapper>
);

export default Footer;