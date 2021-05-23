import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const query = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export const SEO: React.FC = () => {
  const data = useStaticQuery(query);
  const { title } = data.site.siteMetadata;
  return <Helmet title={title} />;
};
