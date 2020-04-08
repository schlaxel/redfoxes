import React from "react";
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import Header from '../components/header';
import SiteWrapper from '../components/siteWrapper';
import styled from 'styled-components';

const Content = styled.div`
    padding: 20px;
    box-sizing: border-box;
`
const BlogEntry = styled.section`
    background: #ccc;
    padding: 10px;
    box-sizing: border-box;
    margin: 10px;
`

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {title date layout rating thumbnail}
                        html
                    }
                }
            }
        }`
    );

    return (
        <SiteWrapper>
            <Header />
            <Content>
                <h1>Hello what the hell?</h1>
                <Link to="/about">About</Link>
                <h2>Blog</h2>
                { 
                    data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <BlogEntry>
                                <h1>{edge.node.frontmatter.title}</h1>
                                <p>{edge.node.frontmatter.date}</p>
                            </BlogEntry>
                        )
                    })
                }
            </Content>
        </SiteWrapper>
    )
};

export default IndexPage;
