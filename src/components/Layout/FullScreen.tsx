import React from 'react';
import { SEO } from '../SEO';
import './FullScreen.scss';

export const FullScreen: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <main className="bg-white dark:bg-black">{children}</main>
    </>
  );
};
