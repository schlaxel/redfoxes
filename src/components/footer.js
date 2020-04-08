import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const FooterElem = styled.footer`
    margin-top: 50px;
    background: #951411;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    color: #fff;
`

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title, test
                }
            }
        }
    `)
    return (
    <FooterElem>
        <p>This is the footer</p>
        <h1>{ data.site.siteMetadata.title }</h1>
        <h2>{ data.site.siteMetadata.test }</h2>
    </FooterElem>
    )
};

export default Footer;