import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import ogimage from '../img/og-image.jpg';

const SEO = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                  title
                  author
                  siteUrl
                  description
                }
            }
        }
    `)

    const seo = {
        title: props.title || data.site.siteMetadata.title,
        description: props.description || data.site.siteMetadata.description,
        url: props.siteUrl || data.site.siteMetadata.siteUrl,
        image: props.image || ogimage
    }
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{ seo.title }</title>
            <meta name="description" content={seo.description} />
            <meta property="og:url" content={seo.url} />
            <meta name="image" content={`${seo.url}${seo.image}`} />
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content={seo.description} />}
            <meta property='og:image' content={`${seo.url}${seo.image}`} />
        </Helmet>
    )
};

export default SEO;