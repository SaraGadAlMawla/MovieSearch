import React, {useState} from 'react'
import posterHolder from './assets/posterHolder.jpg'
import {FaStar} from "react-icons/fa"; 
import { IoIosAddCircle, IoIosRemoveCircle} from "react-icons/io";
import './Movie.css'

function Movie(props) {

    const [addedToWatchlist, setAddedToWatchlist] = useState(props.initialState)
    return (
    <div className="search-res">
        <img
            src={props.movieObj.Poster === "N/A"? posterHolder:props.movieObj.Poster}
            alt="movie poster"
            className="movie-pic"
        />
        <div className="movie-details">
            <div className="rating-title">
                <h2 className="title black-text">{props.movieObj.Title}</h2>
                <FaStar className='star-icon'/>
                <div className="rating black-text">{props.movieObj.imdbRating}</div>
            </div>
            <div className="logistics">
                <div className="make-sisters">
                    <p className="duration black-text">{props.movieObj.Runtime}</p>
                    <p className="genre black-text">{props.movieObj.Genre}</p>
                </div>
                <div className="watchlist" id={props.movieObj.Title}>
                    <button
                        id="add-btn"
                        className="add-btn"
                        onClick={
                            addedToWatchlist?
                            () => props.removeFromWatchlist(props.movieObj, setAddedToWatchlist):
                            () => props.addToWatchlist(props.movieObj, setAddedToWatchlist)
                        }
                    >
                        {addedToWatchlist?
                            <IoIosRemoveCircle className='add-icon'/>:
                            <IoIosAddCircle className='add-icon'/>
                        }
                        Watchlist
                    </button>
                </div>
            </div>
            <p className="describtion">
                {props.movieObj.Plot}
            </p>
        </div>
    </div>
  )
}

export default Movie