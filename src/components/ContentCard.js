import React from 'react'
import { DescriptionMovie } from './DescriptionMovie';
import { Stars } from './Stars';

let n=0;

export const ContentCard = ({ title, urlFull, descr, vote}) => {
    return (
        <div className="card">
            <img src={ '.'+urlFull } alt={ title } />
            <h4> { title } </h4>
            <Stars vote={ vote/2 }/>
            <DescriptionMovie 
                descr={ descr }
                n={n++}{...n}/>
        </div>
    )
}
