import React from 'react';
import styled from 'styled-components';
import C from '../../colors';
import { graphql, useStaticQuery } from 'gatsby';
import SinglePost from './singlePost';

const Wrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    background: #ddd;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: auto;
`

const BlogPosts = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: {
                    fields: frontmatter___date,
                    order: DESC
                  },
                limit: 3
                filter: { collection: { eq: "blog" } }
            ) {
                edges {
                    node {
                        frontmatter { 
                            title 
                            date 
                            path
                            thumbnail { 
                                childImageSharp {
                                    fluid(maxWidth: 1500) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                        }
                        excerpt
                    }
                }
            }
        }`
    );
    console.log(data.allMarkdownRemark);
    return (
        <Wrapper>
            {
                data.allMarkdownRemark.edges.map(edge => (
                    <SinglePost post={edge.node} key={edge.node.frontmatter.path} />
                ))
            }
        </Wrapper> 
    )
}

export default BlogPosts;
