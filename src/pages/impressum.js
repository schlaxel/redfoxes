import React from 'react';
import SiteWrapper from '../components/siteWrapper';
import PageHeader from '../components/pageHeader';
import BackBtn from '../components/backBtn';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const Body = styled.div`
    padding: 20px;
    box-sizing: border-box;
    h1, h2 {
        font-family: 'Source Sans Pro'
    }
`

const Impressum = (props) => {
    return(
        <SiteWrapper>
            <PageHeader />
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <Body dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
            <BackBtn />
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