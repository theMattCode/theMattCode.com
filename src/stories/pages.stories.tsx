import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Default } from '../layouts/Default/Default';
import Index from '../pages';

export default {
  title: 'Pages/Index',
  component: Index,
};

const Template: ComponentStory<typeof Index> = () => (
  <Default>
    <Index />
  </Default>
);

export const Page = Template.bind({});
Page.parameters = { chromatic: { delay: 500 } };
