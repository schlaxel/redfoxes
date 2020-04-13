import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SiteWrapper from '../components/siteWrapper';
import BackBtn from '../components/backBtn';
import C from '../colors';
import SEO from '../components/seo';
import divider from '../img/dreisamstadion_divider_grey.png';

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  background: #ddd;
`
const Inner = styled.div`
  max-width: 1000px;
  margin: auto;
  padding-top: 50px;
  @media (max-width: 1000px) {
    padding-top: 0;
  }
`
const HeadingDate = styled.div`
  display: flex;
  align-items: center;
  background: #1d1d1d;
  padding-bottom: 10px;
`

const H1 = styled.h1`
  color: #eee;
  margin: 0;
  text-align: left;
  padding: 20px 10px 10px 10px;
`
const Date = styled.p`
  color: #999;
  text-align: left;
  padding: 10px;
  margin: 0 10px;
  flex: 0 70px;
`
const Day = styled.div`
  margin: auto;
  background: ${C.red1};
  color: #fff;
  padding: 5px;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
const Month = styled.div`
  margin: auto;
  background: #fff;
  color: #1d1d1d;
  padding: 0px 5px 0 5px;
  text-align: center;
`
const Year = styled.div`
  text-align: center;
  padding: 0 5px;
  background: #fff;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
const ImageWrapper = styled.div`
  width: 100%;
`
const DivideImage = styled.img`
  width: 100%;
  display: block;
  margin: 0;
`

const Content = styled.div`
  background: #1d1d1d;
  padding: 10px;
  margin-top: -20px;
  box-sizing: border-box;
  color: #fff;
`

const BlogTemplate = (props) => {
    console.log(props);
    return (
      <SiteWrapper>
        <Wrapper>
          <Inner>
            <DivideImage src={divider} />
            <HeadingDate>
              <Date>
                <Day>{moment(props.data.markdownRemark.frontmatter.date).format('DD')}</Day>
                <Month>{moment(props.data.markdownRemark.frontmatter.date).format('MMM')}</Month>
                <Year>{moment(props.data.markdownRemark.frontmatter.date).format('Y')}</Year>
              </Date>
              <H1>{props.data.markdownRemark.frontmatter.title}</H1>
            </HeadingDate>
            <ImageWrapper>
              <Img 
                fluid={props.data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}
                alt={props.data.markdownRemark.frontmatter.title}
              />
            </ImageWrapper>
            <Content dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
          </Inner>
        </Wrapper>
        <SEO 
          title={`RFU - ${props.data.markdownRemark.frontmatter.title}`} 
          path={`/blog/${props.data.markdownRemark.frontmatter.path}`}
          image={props.data.markdownRemark.frontmatter.thumbnail.publicURL}
          description={props.data.markdownRemark.excerpt}
        />
        <BackBtn />
      </SiteWrapper>
    )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        date
        path
        title
        thumbnail {
          publicURL 
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

export default BlogTemplate;