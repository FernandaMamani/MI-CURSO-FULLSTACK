import { createContext } from "react";
import PropTypes from "prop-types";

const ShoppingCartcontext = createContext();

const ShoppingCartProvider = (props) => {
    const { children }=props;

    return (
        <ShoppingCartContext.Provider
            x>
            { children }
        </ShoppingCartContext.Provider>
    );
};

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {
    ShoppingCartcontext,
    ShoppingCartProvider,

};