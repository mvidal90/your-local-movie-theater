import React from 'react';
import { ContentCard } from './ContentCard';
import noimage from './static/media/noimage.57aef36f.png';


export const MoviesGridItem = ( { title, url, poster, urlFull, popularity, descr, vote} ) => {

    if(descr === ''){
        descr = 'No overview found.';
    }

    if (poster === null) {
        urlFull= '.'+noimage;
    } else{
        urlFull = url+poster;
    }

    console.log( title, popularity);
    return (
        <ContentCard
            title={ title }
            descr={ descr }
            vote={ vote }
            urlFull= { urlFull }
        />
    )
}