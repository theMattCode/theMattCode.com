import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import './index.scss';

const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        name
        role
        location
      }
    }
  }
`;

const Index: React.FC = () => {
  const data = useStaticQuery(query);
  return (
    <main>
      <h1 className="bold">{data.site.siteMetadata.name}</h1>
      <p>{data.site.siteMetadata.role}</p>
      <div className="italic low-opacity">{data.site.siteMetadata.location}</div>
    </main>
  );
};

export default Index;
