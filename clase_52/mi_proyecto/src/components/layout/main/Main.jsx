import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./main.scss";

import Home from "../../../pages/home/Home";
import About from "../../../pages/about/About";
import Contact from "../../../pages/contact/Contact";
import Product from "../../../pages/product/Product";

const Main = () => {
    return (
        <Box
            component="main"
            className="main">
            <Routes>
                <Route
                    path="/"
                    element={<Home/>}/>
                <Route
                    path="/about"
                    element={<About/>}/>
                <Route
                    path="/contact"
                    element={<Contact/>}/>
                <Route
                    path="/product"
                    element={<Product/>}/>
            </Routes>
        </Box>
    );
};

export default Main;