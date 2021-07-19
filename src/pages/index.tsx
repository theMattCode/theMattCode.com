import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import './index.scss';
import { Icon } from '../components/Icon/Icon';

const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        name
        role
        location
        media {
          name
          handle
          url
        }
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
      <p className="flex-h">
        {data.site.siteMetadata.media.map((entry: { name: string; url: string; handle: string }) => (
          <a href={entry.url} key={entry.name} className="pad-r-m">
            <Icon name={entry.name} />
          </a>
        ))}
      </p>
    </main>
  );
};

export default Index;
