import React , {createContext , useReducer , useEffect} from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState={
    watchlist:localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched:localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

//create context
//GlobalContext will allow components to access the state and dispatch actions.
export const GlobalContext = createContext(initialState);

//provider componnents
export const GlobalProvider = props=>{
    const [state,dispatch]= useReducer(AppReducer , initialState);

    useEffect(()=>{
        localStorage.setItem('watchlist' , JSON.stringify(state.watchlist));
        localStorage.setItem('watched' , JSON.stringify(state.watched));
    },[state]); 

    //actions
    //handeled by AppReducer
    const addMovieToWatchlist = movie =>{
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST" , payload: movie});
    };

    const removeMovieFromWatchList = (id)=>{
        dispatch({type:"REMOVE_MOVIE_FROM_WATCHLIST" , payload: id});
    };

    const addMovieToWatched = (movie)=>{
        dispatch({type: "ADD_MOVIE_TO_WATCHED" , payload: movie });
    };

    //movie to watchlist 

    const moveToWatchList = (movie)=>{
        dispatch({type:"MOVE_TO_WATCH_LIST" , payload: movie});
    };

    //remove from watched

    const removeFromWatched = (id)=>{
        dispatch({type:"REMOVE_FROM_WATCHED" , payload: id});
    };

    return(
        <GlobalContext.Provider value={{
            watchlist: state.watchlist , 
            watched: state.watched , 
            addMovieToWatchlist,
            removeMovieFromWatchList,
            addMovieToWatched,
            moveToWatchList,
            removeFromWatched,
            }}
            >
            {props.children}
        </GlobalContext.Provider>
    );
};



// In summary, this code sets up the initial state of your application 
// using data from local storage. It creates a context to share this
//  state among components, a provider to manage the state with
//   a reducer, and actions to modify the state. When the
//    addMovieToWatchlist action is dispatched, it triggers the 
//    AppReducer to update the state by adding a movie to the watchlist.
