import React from 'react';
import { PageBase } from '../components/PageBase/PageBase';
import './404.scss';

const Error404: React.FC = () => {
  return (
    <PageBase>
      <main>
        <h1>404 - Not Found</h1>
      </main>
    </PageBase>
  );
};

export default Error404;
