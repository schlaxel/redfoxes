import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image";
import { graphql, useStaticQuery } from 'gatsby';


const Wrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: auto;
    background: #A31602;
    padding: 50px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const ImageWrapper = styled.div`
    width: 100%;
    border-radius: 7px;
    overflow: hidden;
`
const ImageOuterWrapper = styled.div`
    max-width: 400px;
    width: 33.33%;
    padding: 10px;
    box-sizing: border-box;
`

const Instagram = () => {
    const data = useStaticQuery(graphql`
        query {
            allInstaNode(limit: 9) {
                edges {
                    node {
                        id
                        username
                        likes
                        comments
                        caption
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 400, maxHeight: 400) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    
    return (
        <Wrapper>
            {
                data.allInstaNode.edges.map((edge) => {
                    return (
                        <ImageOuterWrapper>
                            <ImageWrapper>
                                <Img fluid={edge.node.localFile.childImageSharp.fluid} />
                            </ImageWrapper>
                        </ImageOuterWrapper>
                    )
                })
            }
        </Wrapper>
    )
};

export default Instagram;

