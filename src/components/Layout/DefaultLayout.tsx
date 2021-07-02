import React from 'react';
import { SEO } from '../SEO';
import './DefaultLayout.scss';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />

      <ThemeToggle />
      <main className="bg-white dark:bg-black">{children}</main>
    </>
  );
};
