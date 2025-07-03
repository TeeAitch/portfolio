import { createContext, useContext } from 'react';

type ColorScheme = 'light' | 'dark';
type ColorSchemeContextType = {
    colorScheme: ColorScheme;
    toggleColorScheme: (value?: ColorScheme) => void;
}

export const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(undefined);

export const useColorScheme = () => {
    const ctx = useContext(ColorSchemeContext);
    if (!ctx) throw new Error('useColorScheme must be used within ColorSchemeProvider');
    return ctx;
};
