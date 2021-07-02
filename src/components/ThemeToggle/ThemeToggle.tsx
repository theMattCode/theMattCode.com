import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import React from 'react';
import './ThemeToggle.scss';

export const ThemeToggle: React.FC = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <input
          type="checkbox"
          onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'colorBlind')}
          checked={theme === 'dark'}
        />{' '}
        Dark mode
      </label>
    )}
  </ThemeToggler>
);
