import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import Search from "./Search";
import Navigator from "./Navigator";
import Header from "./Header";
import MovieList from "./MovieList";
import Watchlist from "./Watchlist";

function App() {
  // Used in the Search component
  const [searchRes, setSearchRes] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [userInput, setUserInput] = useState("");
  const searchRef = useRef();
  const inputRef = useRef();

  // Used in the Navigator and Search
  const [currentPage, setCurrentPage] = useState(1);

  const [watchlist, setWatchlist] = useState([]);
  const [watchlistClicked, setWatchlistClicked] = useState(false);
  // window.localStorage.clear()
  useEffect(() => {
    if (localStorage.getItem("watchlist")) {
      setWatchlist(JSON.parse(localStorage.getItem("watchlist")));
    }
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header
          watchlistClicked={watchlistClicked}
          setWatchlistClicked={setWatchlistClicked}
        />
        <Search
          setSearchRes={setSearchRes}
          searchClicked={searchClicked}
          setSearchClicked={setSearchClicked}
          disableButton={disableButton}
          setDisableButton={setDisableButton}
          userInput={userInput}
          setUserInput={setUserInput}
          searchRef={searchRef}
          inputRef={inputRef}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className="movies-list">
          {watchlistClicked ? (
            <Watchlist watchlist={watchlist} setWatchlist={setWatchlist} />
          ) : (
            <MovieList
              searchRes={searchRes}
              watchlist={watchlist}
              setWatchlist={setWatchlist}
            />
          )}
        </div>
        {(!watchlistClicked && searchRes.length !== 0) && (
          <Navigator
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}

export default App;
