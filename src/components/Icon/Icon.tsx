import React from 'react';
import './Icon.scss';

interface Props {
  name: string;
}
export function Icon({ name }: Props): JSX.Element {
  return <i className={`icon icon-s ${name}`} />;
}
