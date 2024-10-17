import PageHeader from "../components/PageHeader";
import { Grid2 } from "@mui/material";
import ClickableCard from "../components/ClickableCard";
import * as Colors from "@mui/material/colors";

function getRandomColor() {
    const palettes = [
        Colors.red,
        Colors.pink,
        Colors.purple,
        Colors.deepPurple,
        Colors.indigo,
        Colors.blue,
        Colors.lightBlue,
        Colors.cyan,
        Colors.teal,
        Colors.green,
        Colors.lightGreen,
        Colors.lime,
        Colors.yellow,
        Colors.amber,
        Colors.orange,
        Colors.deepOrange,
    ];

    const randomPalette = palettes[Math.floor(Math.random() * palettes.length)];

    return randomPalette[50];
}

function ItemsByCategoryPage() {
    const categories = [
        {
            id: 1,
            name: "clothing",
        },
        {
            id: 2,
            name: "electronics",
        },
    ];
    return (
        <>
            <PageHeader title="Pick a category." />
            <Grid2 container spacing={5}>
                {categories.map((category) => {
                    return (
                        <>
                            <Grid2 size={3}>
                                <ClickableCard
                                    title={category.name}
                                    path={`categories/${category.name}`}
                                    bgColor={getRandomColor()}
                                />
                            </Grid2>
                        </>
                    );
                })}
            </Grid2>
        </>
    );
}

export default ItemsByCategoryPage;
