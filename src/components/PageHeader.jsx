import { Typography, IconButton, Stack } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink } from "react-router-dom";
function PageHeader({ title, disableHome, disableBack }) {
    return (
        <Stack direction="row" spacing={5} marginBottom={5}>
            <Typography variant="h1" sx={{ userSelect: 'none' }}>
                {title}
            </Typography>
            <IconButton
                size="large"
                component={RouterLink}
                to="/"
                sx={{ alignSelf: "center", boxShadow: '0 0 10px 1px lightgrey', cursor: disableHome ? 'not-allowed' : 'inherit' }}
                disabled={disableHome}
                color='black'
            >
                <HomeIcon fontSize='inherit'/>
            </IconButton>
        </Stack>
    );
}

export default PageHeader;
