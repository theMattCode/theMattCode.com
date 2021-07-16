import React, { ReactNode } from 'react';
import { SEO } from '../../components/SEO/SEO';
import './Default.scss';

export function Default(props: { children: ReactNode }) {
  return (
    <>
      <SEO />
      {props.children}
    </>
  );
}
