import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const gifs = await getGifs(category);
        setImages(gifs);
    };

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        loading: true
    }
};
