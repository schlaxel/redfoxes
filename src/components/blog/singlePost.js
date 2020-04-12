import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import moment from 'moment';
import BackgroundImage from 'gatsby-background-image';
import C from '../../colors';

const Wrapper = styled(Link)`
    width: 360px;
    min-height: 180px;
    margin: 20px auto;
    border-radius: 7px;
    overflow: hidden;
    text-decoration: none;
`
const ImgWrapper = styled(BackgroundImage)`
    width: 100%;
    height: 180px;
    background-size: cover;
    background-repeat: no-repeat;
`
const Content = styled.div`
    background: #fff;
    padding: 15px;
    box-sizing: border-box;
`
const Heading = styled.h1`
    font-size: 1.3em;
    text-align: left;
    margin: 0;
    box-sizing: border-box;
    color: ${C.red1};
    text-transform: uppercase;
`
const Date = styled.p`
    color: #777;
    margin: 0;
`

const Ex = styled.p`
    color: #555;
    margin: 20px 0 0 0;
`

const SinglePost = ({ post }) => {
    return (
        <Wrapper to={`/blog/${post.frontmatter.path}`}>
            <ImgWrapper fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
            <Content>
                <Heading>{post.frontmatter.title}</Heading>
                <Date>{moment(post.frontmatter.date).format('DD.MM.YYYY - HH:mm')}</Date>
                <Ex>{post.excerpt}</Ex>
            </Content>
        </Wrapper>
    );
};

export default SinglePost;
