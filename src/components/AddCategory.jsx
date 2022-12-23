import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {
    const [ inputValue, setInputValue ] = useState( 'Lionel Messi' ),
        handleInputChange = ( e ) => setInputValue( e.target.value ),
        handleSubmit = ( e ) => {
            e.preventDefault();
            const value = inputValue.trim();
            onNewCategory( value );
            setInputValue( '' );
        };
    
    return (
        <form
            onSubmit={ handleSubmit }
        >
            <input
                type='text'
                placeholder='Search a Gif'
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );
};
