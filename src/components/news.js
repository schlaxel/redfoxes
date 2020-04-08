import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Wrapper = styled.section`
    width: 90%;
    max-width: 450px;
    box-sizing: border-box;
    background: #951411;
    color: #fff;
    padding: 20px;
    margin: 20px auto;
`
const Content = styled.div`
`

const H = styled.h1`
    
`
const Msg = styled.p`
`
const Date = styled.p`
    font-size: 0.8em;
    color: #ddd;
`

const News = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: {
                    fields:frontmatter___date,
                    order:DESC
                  },
                limit: 1
                filter: { collection: { eq: "news" } }
            ) {
                edges {
                    node {
                        frontmatter {title date message}
                    }
                }
            }
        }`
    );

    return (
        <Wrapper>
            {
                data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <Content>
                            <H>{edge.node.frontmatter.title}</H>
                            <Msg>{edge.node.frontmatter.message}</Msg>
                            <Date>Veröffentlicht: {moment(edge.node.frontmatter.datemoment).format('DD.MM.YYYY - HH:mm')}</Date>
                        </Content>
                    )
                })
            }
        </Wrapper>
    );
}

export default News;
