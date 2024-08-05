import {createContext, ReactNode, useCallback, useMemo, useReducer} from "react";

import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeContextProps } from "../interfaces";
import ToggleCustomTheme from "./ToggleCustomTheme.tsx";
import {initialThemeState, themeReducer} from "./themeReducer.tsx";

export const GlobalThemeContext = createContext<ThemeContextProps | null>(null);

export const GlobalThemeContextProvider = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(themeReducer, initialThemeState);

    const toggleColorMode = useCallback(() => {
        dispatch({ type: 'TOGGLE_COLOR_MODE' });
    }, []);

    const toggleCustomTheme = useCallback(() => {
        dispatch({ type: 'TOGGLE_CUSTOM_THEME' });
    }, []);

    const contextValue = useMemo(() => ({
        ...state,
        toggleColorMode,
        toggleCustomTheme
    }), [state, toggleColorMode, toggleCustomTheme]);

    return (
        <GlobalThemeContext.Provider value={ contextValue }>
            <ThemeProvider theme={ state.showCustomTheme ? state.customTheme : state.defaultTheme}>
                <CssBaseline />

                { children }

                <ToggleCustomTheme />
            </ThemeProvider>
        </GlobalThemeContext.Provider>
    );
}