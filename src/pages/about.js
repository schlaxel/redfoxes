import React from 'react';
import styled from 'styled-components';
import SiteWrapper from '../components/siteWrapper';
import C from '../colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const HeaderImg = styled.div`
    width: 100%;
    margin: auto;
    max-width: 1000px;
    @media (min-width: 1000px) {
        margin-top: 30px;
    }
`
const Heading = styled.h1`
    color: ${C.red1};
    text-transform: uppercase;
`
const Body = styled.div`
    padding: 20px;
    box-sizing: border-box;
    h1, h2 {
        font-family: 'Source Sans Pro'
    }
`

const About = (props) => (
    <SiteWrapper>
        <HeaderImg>
            <Img 
                fluid={props.data.markdownRemark.frontmatter.featuredImg.childImageSharp.fluid}
                alt={props.data.markdownRemark.frontmatter.title}
            />
        </HeaderImg>
        <Heading>{props.data.markdownRemark.frontmatter.title}</Heading>
        <Body dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
    </SiteWrapper>
)

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "about" } }) {
      html
      frontmatter {
        path
        title
        featuredImg {
            childImageSharp {
                fluid(maxWidth: 1500) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
      }
    }
  }
`

export default About;