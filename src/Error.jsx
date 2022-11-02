import React from 'react'

function Error({offender}) {
  return (
    <div className="error">
      <h2 className='error-title'>Sorry! No movies found with the name {offender}.</h2> 
      <p className='error'>Please check the spelling or try a different keyword.</p>
    </div>
  )
}

export default Error