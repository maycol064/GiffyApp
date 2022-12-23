import React from "react";

export const GifItem = ( { id, title, url } ) => {
    return (
        <div className="card" key={ id }>
            <img src={ url } alt={ title } />
            <p className="title-card">{ title }</p>
        </div>
    );
};
