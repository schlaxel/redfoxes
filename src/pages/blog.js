import React from 'react';
import SiteWrapper from '../components/siteWrapper';
import PageHeader from '../components/pageHeader';
import BlogPosts from '../components/blog/blogPosts';
import styled from 'styled-components';
import BackBtn from '../components/backBtn';
import Colors from '../colors';

const H = styled.h1`
    text-transform: uppercase;
    color: ${Colors.red1};
`

const BlogPage = () => (
    <SiteWrapper>
        <PageHeader />
        <H>Unser Senf landet nicht nur uff'm Würstle:</H>
        <BlogPosts />
        <BackBtn />
    </SiteWrapper>
);

export default BlogPage;