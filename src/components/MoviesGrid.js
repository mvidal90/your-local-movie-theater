import React from 'react';

import { useFetchMovies } from '../hooks/useFetchMovies';
import { MoviesGridItem } from './MoviesGridItem';


export const MoviesGrid = ({ category }) => {

    const { results } = useFetchMovies( category );

        return (    
        <>
            <h3 >{ category }</h3>
            <div className="card-grid">
            
                {
                    results.map( movie => (
                        <MoviesGridItem 
                            key={ movie.id }
                            { ...movie }
                        />
                    )) 
                }
            
            </div>
        </>       
    )
}
