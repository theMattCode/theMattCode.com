import React, { PropsWithChildren } from 'react';
import './Default.scss';
import { SEO } from '../../components/SEO/SEO';
import { NavBar } from '../../components/PageLayout/NavBar';

export function Default(props: PropsWithChildren<{}>) {
  return (
    <>
      <SEO />
      <NavBar />
      {props.children}
    </>
  );
}
