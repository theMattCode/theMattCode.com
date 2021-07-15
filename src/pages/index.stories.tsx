import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Default } from '../layouts/Default/Default';
import Index from './index';

export default {
  title: 'Pages/Index',
  component: Index,
};

const Template: ComponentStory<typeof Index> = () => (
  <Default>
    <Index />
  </Default>
);

// export const Start = Template.bind({});
