import React from 'react';
import { SEO } from '../SEO';
import './DefaultLayout.scss';

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <main>{children}</main>
    </>
  );
};
