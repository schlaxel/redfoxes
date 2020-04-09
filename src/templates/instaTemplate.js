import React from 'react';
import styled, { css } from 'styled-components';
import { graphql, Link } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import Img from "gatsby-image";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 50px;
`
const InnerWrapper = styled.div`
    height: 100%;
    width: 100%;
`
const Caption = styled.div`
    width: 100%;
    height: 20%;
    padding: 5px 20px;
    box-sizing: border-box;
    background: #fff;
    border-top: solid 5px #950210;
    max-width: 500px;
    margin: auto;
    overflow: auto;
    display: flex;
    align-items: center;
`
const H = styled.h1`
    font-size: 1em;
    font-family: 'Source Sans Pro';
`

const ImgWrapper = styled.div`
    max-height: 100%;
`
const Nav = styled.div`
    position: fixed;
    bottom: 10px;
    right: 50px;
`

const LinkStyle = css`
    display: block;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    color: #333;
    text-decoration: none;
    text-transform: uppercase;
    border: solid 3px #950210;
    float: left;
    margin: 0 10px;
`
const A = styled.a`
    ${LinkStyle}
`
const HomeLink = styled(Link)`
    ${LinkStyle}
`

const ImageOuter = styled.div`
    max-width: 500px;
    width: auto;
    background: #eee;
    margin: auto;
`

const InstaTemplate = (props) => {    
    return (
        <Wrapper>
            <InnerWrapper>
                <ImageOuter>
                    <ImgWrapper>
                        <Img 
                            style={{ margin: '0rem', maxHeight: 'calc(80vh - 5em)' }}
                            imgStyle={{ objectFit: 'contain' }} 
                            fluid={props.data.instaNode.localFile.childImageSharp.fluid} 
                        />
                    </ImgWrapper>
                </ImageOuter>
                <Caption>
                    <H>{props.data.instaNode.caption}</H>
                </Caption>
            </InnerWrapper>
            <Nav>
                <A target="_blank" href={`https://instagram.com/p/${props.data.instaNode.id}`}>
                    Auf Instagram anzeigen
                </A>
                <HomeLink state={{ noScroll: true }} to="/">
                    Zurück
                </HomeLink>
            </Nav>
        </Wrapper>
    )
}

export const pageQuery = graphql`
  query($slug: String!) {
    instaNode(id: { eq: $slug }) {
      caption
      id
      localFile {
          childImageSharp {
              fluid(maxWidth: 700, maxHeight: 700) {
                  ...GatsbyImageSharpFluid
              }
          }
      }
    }
  }
`

export default InstaTemplate;