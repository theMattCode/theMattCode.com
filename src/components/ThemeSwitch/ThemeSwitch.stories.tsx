import { ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeSwitch } from './ThemeSwitch';

export default {
  title: 'Components/ThemeSwitch',
  component: ThemeSwitch,
};

const Template: ComponentStory<typeof ThemeSwitch> = () => <ThemeSwitch />;

export const Switch = Template.bind({});
