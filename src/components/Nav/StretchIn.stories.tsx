import React from 'react';
import { StretchIn } from './StretchIn';

export default {
  title: 'Components/StretchIn',
  component: StretchIn,
};

export const Examples = () => (
  <div
    style={{
      width: 400,
      height: 400,
      border: 'solid 1px grey',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'center',
    }}
  >
    <StretchIn name="Blog" delayInMS="100" />
    <StretchIn name="Projects" delayInMS="200" />
    <StretchIn name="About" delayInMS="300" />
  </div>
);
