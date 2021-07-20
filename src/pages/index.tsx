import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import './index.scss';
import { IndexDataQuery } from '../../graphql-types';
import { Icon } from '../components/Icon/Icon';

const query = graphql`
  query IndexData {
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
  const data = useStaticQuery<IndexDataQuery>(query);
  const { name, role, location, media } = data.site!.siteMetadata!;
  return (
    <main>
      <h1 className="bold">{name}</h1>
      <p>{role}</p>
      <div className="italic low-opacity flex-h">
        <Icon name="Location" />
        {location}
      </div>
      <p className="flex-h">
        {media!.map((entry: any) => (
          <a href={entry.url} key={entry.name} className="pad-r-m">
            <Icon name={entry.name} />
          </a>
        ))}
      </p>
    </main>
  );
};

export default Index;
