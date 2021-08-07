import React from 'react';
import './StretchIn.scss';

interface Props {
  name: string;
  delayInMS?: '100' | '200' | '300';
  durationInMS?: '1000';
}

export function StretchIn({ name, delayInMS = '100', durationInMS = '1000' }: Props): JSX.Element {
  const duration = `duration-${durationInMS}`;
  const delay = `delay-${delayInMS}`;
  return (
    <div className={`stretch-in ${delay} ${duration}`}>
      <div className={`font-size-xl bold stretch-in-text ${delay} ${duration}`}>{name}</div>
    </div>
  );
}
