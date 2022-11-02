import React from 'react'
import movieIcon from './assets/movie-icon.png'

function PlaceHolder({text}) {
  return (
    <div className="placeholder">
        <img src={movieIcon} alt="" />
        <div className="starter-prompt">
            {text}
        </div>
    </div>
  )
}

export default PlaceHolder