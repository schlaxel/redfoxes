import React from "react";
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import Footer from '../components/footer';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    background: #eee;
    margin: 0;
    padding-top: 20px;
    box-sizing: border-box;
    font-family: 'Helvetica';
`
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
        <Wrap>
            <GlobalStyle />
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
            <Footer />
        </Wrap>
    )
};

export default IndexPage;
