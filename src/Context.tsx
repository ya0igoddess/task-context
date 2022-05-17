import React from 'react';
import { ReactElement, useContext } from 'react';

type Theme = 'light' | 'dark';
const themeContext = React.createContext<Theme>('dark');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <themeContext.Provider value={props.theme}>
            {props.children}
        </themeContext.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(themeContext);
}
