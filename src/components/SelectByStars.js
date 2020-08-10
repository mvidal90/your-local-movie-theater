import React, {useState} from 'react'

export const SelectByStars = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setCategories( cats => [ inputValue ]);
        
    }

    return (
        <form onSubmit={ handleSubmit } className="selectStars clasification">
            <h2 className='titleStars'> Select yours movies by stars </h2>
            <button 
                onClick={ () => setInputValue('5 Stars')}
                onChange={ handleInputChange }> ★ </button>
            <button 
                onClick={ () => setInputValue('4 Stars')}
                onChange={ handleInputChange }> ★ </button>    
            <button 
                onClick={ () => setInputValue('3 Stars')}
                onChange={ handleInputChange }> ★ </button>
            <button
                onClick={ () => setInputValue('2 Stars')}
                onChange={ handleInputChange }> ★ </button>
            <button 
                onClick={ () => setInputValue('1 Star')}
                onChange={ handleInputChange }> ★ </button>           
        </form>
    )
}
