import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
    <footer>
        <p>This is the footer</p>
        <h1>{ data.site.siteMetadata.title }</h1>
        <h2>{ data.site.siteMetadata.test }</h2>
    </footer>
    )
};

export default Footer;