import React from 'react'
import Movie from './Movie'
import PlaceHolder from './placeHolder';

function Watchlist(props) {
    const renderedWatchlist = []
    localStorage.setItem('watchlist', JSON.stringify(props.watchlist))
    
    function removeFromWatchlist(currentMovie, setState) {
        console.log("removed");
        setState((state) => !state);
        const newArray =[]
        for (let movie of props.watchlist) {
            if (movie.imdbID !== currentMovie.imdbID) {
                newArray.push(movie);
            }
        }
        props.setWatchlist(() => [...newArray]);
        console.log(props.watchlist)
    }

    function addToWatchlist(movie, setState) {
        console.log("added");
        setState((state) => !state);
        props.setWatchlist((old) => [...old, movie]);
        console.log(props.watchlist)
    }
    if (props.watchlist.length === 0){
        renderedWatchlist.push(
            <PlaceHolder key={1} text={"No movies added yet!"}/>
        )
    }
    else{
        for (let movie of props.watchlist) {
            renderedWatchlist.push(
              <Movie
                key={movie.imdbID}
                movieObj={movie}
                addToWatchlist={addToWatchlist}
                removeFromWatchlist={removeFromWatchlist}
                initialState = {true}
              />
            );
        }
    }
    
    
    return (
        <div>{renderedWatchlist}</div>
    )
}

export default Watchlist