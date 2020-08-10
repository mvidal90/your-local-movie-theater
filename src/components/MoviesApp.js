import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { MoviesGrid } from './MoviesGrid';
import { SelectByStars } from './SelectByStars';

export const MoviesApp = () =>{

    const [categories, setCategories] = useState(['Movies Suggested'])
    return (
        <>
            <div className="header">
                <h2> Your Local Movie Theater </h2>
                {<AddCategory setCategories={ setCategories }/>}
                {<SelectByStars setCategories={ setCategories }/>}
            </div>
            { <ol>
                {
                    categories.map( category => (
                        <MoviesGrid   
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol> }
        </>
    );

}