import React from 'react'

function Header(props) {
  function renderWatchlist(){
    props.setWatchlistClicked(old => !old)
  }
  return (
    <header className='header'>
        <h1 className='site-title'>Movie Wiz</h1>
        <button
          className='watchlist-btn'
          onClick={renderWatchlist}
        >
          {props.watchlistClicked?"Back":"Watchlist"}
        </button>
    </header>
  )
}

export default Header