import {ThemeAction, ThemeState} from "../interfaces";
import {createTheme} from "@mui/material/styles";
import getCustomTheme from "./getCustomTheme.tsx";

export const LIGHT_MODE = 'light';
export const DARK_MODE = 'dark';

export const initialThemeState: ThemeState = {
    mode: LIGHT_MODE,
    showCustomTheme: true,
    customTheme: createTheme(getCustomTheme(LIGHT_MODE)),
    defaultTheme: createTheme({ palette: { mode: LIGHT_MODE } }),
};

export function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
    switch (action.type) {
        case 'TOGGLE_COLOR_MODE':
            const newMode = state.mode === DARK_MODE ? LIGHT_MODE : DARK_MODE;
            return {
                ...state,
                mode: newMode,
                customTheme: createTheme(getCustomTheme(newMode)),
                defaultTheme: createTheme({ palette: { mode: newMode } }),
            };
        case 'TOGGLE_CUSTOM_THEME':
            return {
                ...state,
                showCustomTheme: !state.showCustomTheme
            };
        default:
            return state;
    }
}