import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
    const [category, setCategory] = useState("Lionel Messi");

    const onAddCategory = (value) => {
        if (value.toLowerCase() === category.toLowerCase()) return;
        if (value.trim().length <= 1) return;
        setCategory(value);
    };

    return (
        <div className="main">
            <h1>Giffy App</h1>
            <hr />
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />
            <GifGrid category={category} key={category} />
        </div>
    );
};

export default GifExpertApp;
