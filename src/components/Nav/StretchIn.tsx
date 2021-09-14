import classNames from 'classnames';
import React from 'react';
import './StretchIn.scss';

interface Props {
  name: string;
  delayInMS?: '100' | '200' | '300';
  durationInMS?: '1000';
}

export function StretchIn({ name, delayInMS, durationInMS = '1000' }: Props): JSX.Element {
  const computedStyles = {
    [`duration-${durationInMS}`]: true,
    [`delay-${delayInMS}`]: delayInMS,
  };
  return (
    <div className={classNames('stretch-in', computedStyles)}>
      <div className={classNames('font-size-xl', 'bold', 'stretch-in-text', computedStyles)}>{name}</div>
    </div>
  );
}
