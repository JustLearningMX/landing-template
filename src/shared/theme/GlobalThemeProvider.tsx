import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import ToggleCustomTheme from "./ToggleCustomTheme.tsx";
import { useGlobalTheme } from "../hooks/useGlobalTheme.tsx";
/*Sin uso*/
export const GlobalThemeProvider = ({ children }: { children: ReactNode }) => {

    const { showCustomTheme, LPtheme, defaultTheme } = useGlobalTheme();

    return (
        <ThemeProvider theme={ showCustomTheme ? LPtheme : defaultTheme}>
            <CssBaseline />
            { children }

            <ToggleCustomTheme />
        </ThemeProvider>
    );
}