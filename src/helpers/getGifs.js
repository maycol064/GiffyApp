export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=q4Zj0YFcUez6ea47erjxTD7PTlsiC9QY&q=${ category }&limit=20`,
        resp = await fetch( url ),
        { data } = await resp.json();

    const gifs = data.map( ( img ) => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized.url
    }));

    return gifs;
}