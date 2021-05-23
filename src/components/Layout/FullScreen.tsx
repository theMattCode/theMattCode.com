import React from 'react';
import { createUseStyles } from 'react-jss';
import { SEO } from '../SEO';

const useStyles = createUseStyles({
  main: {
    display: 'grid',
    alignContent: 'center',
    textAlign: 'center',
    margin: '0 auto',
    minHeight: '100vh'
  }
});

export const FullScreen: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <main className={useStyles().main}>{children}</main>
    </>
  );
};
