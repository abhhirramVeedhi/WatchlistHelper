import React from "react";
import {MovieControl} from './MovieControl';

export const MovieCard=({movie  , type}) =>{
    return(
        <div className="movie-card">
            <div className="overlay"></div>
            {movie.poster_path ? (
                    <img src={`https://image.tmbd.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                ) : (
                    <div className='filler-poster'></div>
                )}
                <MovieControl type={type} movie={movie}/>
        </div>
    )
}