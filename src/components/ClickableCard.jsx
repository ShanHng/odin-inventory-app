import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function ClickableCard({ title, toPath, bgColor }) {
    const sx = {
        height: "30vh",
        backgroundColor: bgColor,
    };
    return (
        <Card
            component={RouterLink}
            to={`${toPath}`}
            sx={{ textDecorationLine: "none" }}
        >
            <CardActionArea>
                <CardContent sx={sx}>
                    <Typography variant="h4">{title}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ClickableCard;
