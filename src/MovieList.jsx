import React from "react";
import Error from "./Error";
import Movie from "./Movie";
import PlaceHolder from "./placeHolder";

function MovieList(props) {
  let movieList = [<PlaceHolder key={1} text={"Start browsing"}/>];

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

  function isInWatchlist(movie){
    for (let element of props.watchlist) {
      if (element.imdbID === movie.imdbID) {
        return true
      }
    }
    return false
  }

  if (props.searchRes.length === 10) {
    movieList = []
    for (let movie of props.searchRes) {
      movieList.push(
        <Movie
          key={movie.imdbID}
          movieObj={movie}
          addToWatchlist={addToWatchlist}
          removeFromWatchlist={removeFromWatchlist}
          initialState = {isInWatchlist(movie)}
        />
      );
    }
  }
  else if (props.searchRes && props.searchRes[0]=== "error") {
    movieList.push(
      <Error
        key={1}
        offender = {props.searchRes[1]}
      />
    )
  }
  return <div>{movieList}</div>;
}

export default MovieList;
