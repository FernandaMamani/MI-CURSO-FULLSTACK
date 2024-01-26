import { Box } from "@mui/material";
import { useState } from "react";

const Home = () => {
    const [ products, setPoducts ] = useState([]);
    return (
        <Box className="home">
            <Box
                component="section"
                className="home__section">
            </Box>

            <Box
                className="home__section__search">
                <h3>Productos</h3>

            </Box>
        </Box>
    );
};

export default Home;