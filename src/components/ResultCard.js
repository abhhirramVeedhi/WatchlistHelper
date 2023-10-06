import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const ResultCard = ({ movie }) => {
    const {
        addMovieToWatchlist, watchlist , watched , addMovieToWatched 
    } = useContext(GlobalContext);

    let storedMovie = watchlist.find(o => o.id === movie.id);
    let storedMovieWatched = watched.find(o=>o.id === movie.id);
    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false ;
    const watchedDisabled =  storedMovieWatched ? true : false ;
    return (
        <div className='result-card'>
            <div className='poster-wraper'>
                {movie.poster_path ? (
                    <img src={`https://image.tmbd.org/t/p/w200${movie.posteer_path}`} alt={`${movie.title} Poster`} />
                ) : (
                    <div className='filler-poster'></div>
                )}
            </div>

            <div className='info'>
                <div className='header'>
                    <h3 className='title'>
                        {movie.title}
                    </h3>
                    <h4 className='release-data'>
                        {movie.release_data ? movie.release_data.substring(0, 4) : "-"}
                    </h4>
                </div>

                <div className='controls'>
                    <button className='btn' disabled={watchlistDisabled} onClick={() => addMovieToWatchlist(movie)}><b>+</b> Add to watclist</button>

                    <button className='btn' disabled={watchedDisabled} onClick={() => addMovieToWatched(movie)}><b>+</b> Add to watched</button>
                </div>
            </div>
        </div>
    )
}
export default ResultCard;
