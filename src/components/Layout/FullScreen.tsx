import React from 'react';
import { SEO } from '../SEO';

export const FullScreen: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <main>{children}</main>
    </>
  );
};
