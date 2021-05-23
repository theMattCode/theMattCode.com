import React from 'react';
import { createUseStyles } from 'react-jss';
import { SEO } from '../components/SEO';

const useStyles = createUseStyles({
  main: {
    display: 'grid',
    alignContent: 'center',
    textAlign: 'center',
    margin: '0 auto',
    minHeight: '100vh'
  }
});

const Error404: React.FC = () => {
  const { main } = useStyles();
  return (
    <>
      <SEO />
      <main className={main}>
      <h1>404 - Not Found - theMattCode.com</h1>
      </main>
    </>
  );
};

export default Error404;
