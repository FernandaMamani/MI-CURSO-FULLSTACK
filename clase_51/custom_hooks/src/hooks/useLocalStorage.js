import { useEffect, useState } from "react";

const useLocalStorage = (initialValue = {}) => {
    const [ value, setValue ] = useState(initialValue);

    const exists = (key) => {
        if (window.localStorage.getItem(key) === null){
            return false;
        }
        return true;
    };

    const synchronize = (initialValue) => {
        const synchronizedItems ={};

    };

    useEffect(()=> {
        const itemValue = JSON.parse(window.localStorage.getItem("count"));
        setValue(itemValue);
    }, []);

    const setItemValue = () => {
        window.localStorage.setItem(key, JSON.stringify(newValue));
        setValue({ ...value, [key]: newValue });
    };

    const removeItem = (key) => {
        window.localStorage.removeItem();
        const currentItems = { ...value };
        delete currentItems[key];
        setValue(currentItems);
    };

    const clearItem = (key) => {
        window.localStorage.clear();
        setValue({});
    };
};
export default useLocalStorage;