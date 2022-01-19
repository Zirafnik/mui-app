import { createTheme } from "@mui/material";
import { indigo, yellow, orange } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: indigo,
        secondary: yellow
    },
    status: {
        danger: orange
    }
});

export default theme;