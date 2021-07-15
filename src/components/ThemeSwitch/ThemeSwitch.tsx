import React from 'react';
import './ThemeSwitch.scss';

interface Props {
  value?: 'dark' | 'light';
}

export function ThemeSwitch({ value }: Props) {
  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round"></div>
      </label>
    </div>
  );
}
