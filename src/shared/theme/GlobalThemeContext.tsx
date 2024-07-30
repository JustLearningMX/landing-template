import {createContext, ReactNode, useCallback, useMemo, useState} from "react";

import { PaletteMode } from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";

import getCustomTheme from "./getCustomTheme.tsx";
import { ThemeContextProps } from "../interfaces";
import CssBaseline from "@mui/material/CssBaseline";
import ToggleCustomTheme from "./ToggleCustomTheme.tsx";

export const LIGHT_MODE = 'light';
export const DARK_MODE = 'dark';

export const GlobalThemeContext = createContext<ThemeContextProps | null>(null);

export const GlobalThemeContextProvider = ({ children }: { children: ReactNode }) => {

    const [mode, setMode] = useState<PaletteMode>(LIGHT_MODE);
    const [showCustomTheme, setShowCustomTheme] = useState(true);
    const customTheme = useMemo(() => createTheme(getCustomTheme(mode)), [mode]);
    const defaultTheme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

    const toggleColorMode = useCallback(() => {
        setMode((prev) => (prev === DARK_MODE ? LIGHT_MODE : DARK_MODE));
    }, []);

    const toggleCustomTheme = useCallback(() => {
        setShowCustomTheme((prev) => !prev);
    }, []);

    const contextValue = useMemo(() => ({
        mode,
        showCustomTheme,
        customTheme,
        defaultTheme,
        toggleColorMode,
        toggleCustomTheme
    }), [mode, showCustomTheme, customTheme, defaultTheme, toggleColorMode, toggleCustomTheme]);

    return (
        <GlobalThemeContext.Provider value={ contextValue }>
            <ThemeProvider theme={ showCustomTheme ? customTheme : defaultTheme}>
                <CssBaseline />

                { children }

                <ToggleCustomTheme />
            </ThemeProvider>
        </GlobalThemeContext.Provider>
    );
}