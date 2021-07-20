import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { SeoDataQuery } from '../../../graphql-types';

const query = graphql`
  query SEOData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export const SEO: React.FC = () => {
  const data = useStaticQuery<SeoDataQuery>(query);
  const { title } = data.site!.siteMetadata!;
  return <Helmet title={title!} bodyAttributes={{ 'data-theme': 'dark' }} />;
};
