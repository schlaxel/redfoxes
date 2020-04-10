import React from 'react';
import SiteWrapper from '../components/siteWrapper';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const Impressum = (props) => {
    return(
        <SiteWrapper>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
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