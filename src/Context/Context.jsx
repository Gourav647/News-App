import { createContext, useState } from "react";

export const Context = createContext();

const Provide = (props) => {
    const [category, setCategory] = useState("science");

    const data = {
        category,
        setCategory
    }
    return (
        <Context.Provider value={data}>
            {props.children}
        </Context.Provider>
    )
}

export default Provide