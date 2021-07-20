import React from 'react';
import './Icon.scss';

interface Props {
  name: string;
  size?: 's' | 'm' | 'l';
}
export function Icon({ name, size = 'm' }: Props): JSX.Element {
  return <i className={`icon icon-${size} ${name}`} />;
}
