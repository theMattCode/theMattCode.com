import React from 'react';
import '../../base.scss';
import { SEO } from '../SEO/SEO';

export const PageBase: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      {children}
    </>
  );
};
