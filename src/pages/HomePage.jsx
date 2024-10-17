import { Grid2 } from "@mui/material";
import { blue, pink } from "@mui/material/colors";
import PageHeader from "../components/PageHeader";
import ClickableCard from "../components/ClickableCard";

function HomePage() {
    return (
        <>
            <PageHeader title="Your stuff." disableHome />
            <Grid2 container spacing={5}>
                <Grid2 size={3}>
                    <ClickableCard
                        title="View all items"
                        toPath="items"
                        bgColor={blue[100]}
                    />
                </Grid2>
                <Grid2 size={3}>
                    <ClickableCard
                        title="View items by category"
                        toPath="categories"
                        bgColor={pink[100]}
                    />
                </Grid2>
            </Grid2>
        </>
    );
}

export default HomePage;
