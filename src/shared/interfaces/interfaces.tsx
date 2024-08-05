import { PaletteMode } from "@mui/material";
import {createTheme} from "@mui/material/styles";

export interface ThemeState {
    mode: PaletteMode;
    showCustomTheme: boolean;
    customTheme: ReturnType<typeof createTheme>;
    defaultTheme: ReturnType<typeof createTheme>;
}

export interface ThemeContextProps extends ThemeState {
    toggleColorMode: () => void;
    toggleCustomTheme: () => void;
}

export type ThemeAction =
    | { type: 'TOGGLE_COLOR_MODE' }
    | { type: 'TOGGLE_CUSTOM_THEME' };