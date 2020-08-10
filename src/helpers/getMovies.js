
export const getMovies = async( category ) =>{

    if ( category === 'Movies Suggested') {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=ce4ee431c75143ac4b030f105376623b&sort_by=popularity.desc`;
        const resp = await fetch( url );
        const { results } = await resp.json();

        const movies = results.map( movie => {
            return{
                id: movie.id,
                title: movie.title,
                url: 'https://image.tmdb.org/t/p/w200',
                popularity: movie.popularity,
                poster: movie.poster_path,
                descr: movie.overview,
                vote: movie.vote_average            
            }  
            
        })

        return movies;
        
    }else{
        
        if (category === '1 Star' || category ==='2 Stars' || category ==='3 Stars' || category ==='4 Stars' || category ==='5 Stars') {

            let starMin=8;
            let starMax=10;

            switch (category) {
                case '1 Star':
                    starMin=0;
                    starMax=1.99;

                    break;
                case '2 Stars':
                    starMin=2;
                    starMax=3.99;

                    break;                    
                case '3 Stars':
                    starMin=4;
                    starMax=5.99;

                    break;                    
                case '4 Stars':
                    starMin=6;
                    starMax=7.99;

                    break;                    
                default:
                    starMin=8;
                    starMax=10;
                    
                    break;                    
            }
            const url = `https://api.themoviedb.org/3/discover/movie?api_key=ce4ee431c75143ac4b030f105376623b&sort_by=vote_average.desc&vote_average.gte=${ starMin }&vote_average.lte=${ starMax }&vote_count.gte=1`;
            const resp = await fetch( url );
            const { results } = await resp.json();

            const movies = results.map( movie => {
            return{
                id: movie.id,
                title: movie.title,
                url: 'https://image.tmdb.org/t/p/w200',
                popularity: movie.popularity,
                poster: movie.poster_path,
                descr: movie.overview,
                vote: movie.vote_average            
            }   
            
            })
            return movies;
        } else {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=ce4ee431c75143ac4b030f105376623b&query=${ encodeURI(category) }`;
            const resp = await fetch( url );
            const { results } = await resp.json();

            const movies = results.map( movie => {
            return{
                id: movie.id,
                title: movie.title,
                url: 'https://image.tmdb.org/t/p/w200',
                popularity: movie.popularity,
                poster: movie.poster_path,
                descr: movie.overview,
                vote: movie.vote_average            
            }   
            
        })
        return movies;
        }
        
    }
}