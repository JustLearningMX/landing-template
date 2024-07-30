import { useContext } from "react";
import { GlobalThemeContext } from "../theme/GlobalThemeContext.tsx";

export function useGlobalTheme() {
    const context = useContext(GlobalThemeContext);

    if (!context) {
        throw new Error('useGlobalTheme must be used within a GlobalThemeContextProvider');
    }

    return context;
}