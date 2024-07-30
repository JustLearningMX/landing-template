import Box from "@mui/material/Box";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import {useGlobalTheme} from "../hooks/useGlobalTheme.tsx";

export default function ToggleCustomTheme() {

    const { showCustomTheme, toggleCustomTheme } = useGlobalTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100dvw',
                position: 'fixed',
                bottom: 24,
            }}
        >
            <ToggleButtonGroup
                color="primary"
                exclusive
                value={showCustomTheme}
                onChange={toggleCustomTheme}
                aria-label="Toggle design language"
                sx={{
                    backgroundColor: 'background.default',
                    '& .Mui-selected': {
                        pointerEvents: 'none',
                    },
                }}
            >
                <ToggleButton value={true}>
                    <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
                    Custom theme
                </ToggleButton>
                <ToggleButton data-screenshot="toggle-default-theme" value={false}>
                    Material Design 2
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
}