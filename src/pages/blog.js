import React from 'react';
import SiteWrapper from '../components/siteWrapper';
import PageHeader from '../components/pageHeader';
import BlogPosts from '../components/blog/blogPosts';
import Footer from '../components/footer';
import styled from 'styled-components';
import Colors from '../colors';

const H = styled.h1`
    text-transform: uppercase;
    color: ${Colors.red1};
`

const BlogPage = () => (
    <SiteWrapper>
        <PageHeader />
        <H>Blog</H>
        <BlogPosts />
        <Footer />
    </SiteWrapper>
);

export default BlogPage;