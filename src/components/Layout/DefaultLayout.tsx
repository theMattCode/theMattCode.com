import React from 'react';
import { SEO } from '../SEO';
import './DefaultLayout.css';

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <main>{children}</main>
    </>
  );
};
