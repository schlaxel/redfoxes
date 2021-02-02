import React from 'react';
import SiteWrapper from '../components/siteWrapper';
import BackBtn from '../components/backBtn';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import divider from '../img/dreisamstadion_divider_grey.png';

const Body = styled.div`
    padding: 20px;
    box-sizing: border-box;
    h1, h2 {
        font-family: 'Source Sans Pro'
    }
    max-width: 1000px;
    margin: auto;
`
const HeaderImage = styled.img`
  width: 100%;
  display: block;
  margin: 0;
`
const Content = styled.div`
  width: 100%;
  background: #1d1d1d;
  color: #fff;
`
const Heading = styled.h1`
  margin: 0%;
`

const Impressum = (props) => {
    return(
        <SiteWrapper>
            <HeaderImage src={divider} />
            <Content>
              <Heading>{props.data.markdownRemark.frontmatter.title}</Heading>
              <Body dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
            </Content>
            <BackBtn />
            <SEO title="Red Foxes United - Impressum" />
        </SiteWrapper>
    )
};

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "impressum" } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

export default Impressum;