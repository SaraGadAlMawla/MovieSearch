import React, { useEffect } from "react";
import { BsSearch } from "react-icons/bs";

function Search(props) {
  function clickIfEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      props.searchRef.current.click();
    }
  }

  useEffect(() => {
    if (props.userInput) {
      getSearchRes(props.userInput, props.currentPage);
    } else {
      props.setDisableButton(false);
    }
    props.inputRef.current.addEventListener("keypress", clickIfEnter);
    return () => {
      props.inputRef.current.removeEventListener("keypress", clickIfEnter);
    };
  }, [props.searchClicked, props.currentPage]);

  function getSearchRes(searchTerm, page = 1) {
    if (searchTerm.length > 0) {
      const baseURL = "https://www.omdbapi.com/?apikey=f1bcffb8&";
      fetch(`${baseURL}s=${searchTerm}&page=${page}`)
        .then((response) => {
          props.setSearchRes([]);
          return response.json();
        })
        .then((jsonSearchObj) => {
          const searchArr = jsonSearchObj.Search;
          if (searchArr) {
            for (let movie of searchArr) {
              fetch(`${baseURL}i=${movie.imdbID}`)
                .then((detailedRes) => detailedRes.json())
                .then((jsonDetailedObj) => {
                  props.setSearchRes((oldSearch) => {
                    return [...oldSearch, jsonDetailedObj];
                  });
                });
            }
          } else {
            props.setSearchRes(["error", props.userInput]);
          }
          props.setDisableButton(false);
        });
    }
  }

  function handelClick() {
    props.setDisableButton(true);
    props.setSearchClicked((old) => !old);
    props.setCurrentPage(1);
  }
  return (
    <div className="search-bar">
      <input
        className="user-input"
        ref={props.inputRef}
        type="text"
        value={props.userInput}
        onChange={(event) => props.setUserInput(event.target.value)}
      />
      <button
        className="search-btn"
        ref={props.searchRef}
        disabled={props.disableButton}
        onClick={handelClick}
      >
        <BsSearch className="serch-icon" />
      </button>
    </div>
  );
}

export default Search;
