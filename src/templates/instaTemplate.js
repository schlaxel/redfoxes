import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from "gatsby-image";
import BackBtn from '../components/backBtn';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`
const ImageOuter = styled.div`
    position: fixed;
    top: 100px;
    right: 50px;
    bottom: 100px;
    left: 50px;
`
const Caption = styled.div`
    position: fixed;
    top: 20px;
    left: 50px;
    right: 50px;
    padding: 5px 20px;
    box-sizing: border-box;
    background: rgba(250,250,250,0.5);
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
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const InstaTemplate = (props) => {    
    return (
        <Wrapper>
            <ImageOuter>
                <ImgWrapper className="animated zoomIn">
                    <Img 
                        // style={ /*{ margin: '0rem', maxHeight: 'calc(80vh - 5em)' } */}
                        style={{ width: '100%', maxHeight: '100%' }}
                        imgStyle={{ objectFit: 'contain' }} 
                        fluid={props.data.instaNode.localFile.childImageSharp.fluid} 
                    />
                </ImgWrapper>
            </ImageOuter>
            <Caption  className="animated fadeInDown">
                <H>{props.data.instaNode.caption}</H>
            </Caption>
            <BackBtn />
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