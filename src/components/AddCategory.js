import React, {useState} from 'react'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length >0) {
            setCategories( cats => [ inputValue ]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="Text"
                value= { inputValue }
                onChange={ handleInputChange }
                placeholder='Select yours movies here'
            />
        </form>
    )
}
