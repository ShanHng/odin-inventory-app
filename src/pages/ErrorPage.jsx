import {
    Typography,
    CardContent,
    Card,
    Grid2,
    IconButton,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import PageHeader from "../components/PageHeader";

function ErrorPage() {
    const sx = {
        height: "30vh",
        backgroundColor: grey[400],
    };
    return (
        <>
            <PageHeader title='No stuff here.'/>
            <IconButton label="home" />
            <Grid2 container spacing={5}>
                <Grid2 size={3}>
                    <Card>
                        <CardContent sx={sx}>
                            <Typography variant="h4">Womp</Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 size={3}>
                    <Card>
                        <CardContent sx={sx}>
                            <Typography variant="h4">womp.</Typography>
                        </CardContent>
                    </Card>
                </Grid2>
            </Grid2>
        </>
    );
}

export default ErrorPage;
