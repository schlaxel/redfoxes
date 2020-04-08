import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const Wrapper = styled.div`

`

const BlogTemplate = (props) => {
    console.log(props);
    return (
        <Wrapper>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
        </Wrapper>
    )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default BlogTemplate;