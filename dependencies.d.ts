declare module 'gatsby-plugin-dark-mode' {
  export interface ThemeTogglerRenderProps {
    theme: string;
    toggleTheme: (theme: string) => void;
  }
  export interface ThemeTogglerProps {
    children: (renderProps: ThemeTogglerRenderProps) => React.ReactNode;
  }
  export const ThemeToggler: React.FC<ThemeTogglerProps>;
}
