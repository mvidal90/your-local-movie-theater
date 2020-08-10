import { useState, useEffect } from "react"
import { getMovies } from '../helpers/getMovies';

export const useFetchMovies = ( category ) =>{

    const [state, setState] = useState({
        results: [],
    });

    useEffect( () =>{
        
        getMovies( category )
            .then( imgs => {
                 
                setState({
                    results: imgs
                });

            })
            
    }, [category])

    return state;

}