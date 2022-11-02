import React from 'react'
import {BsFillCaretRightFill, BsFillCaretLeftFill} from "react-icons/bs"

function Navigator(props) {
    function goBack(){
        props.setCurrentPage(old => old - 1)
    }

    function goForward(){
        props.setCurrentPage(old => old + 1)
    }

    return (
    <div className="navigator">
        <button className='left-btn'
            disabled = {props.currentPage === 1? true : false}
            onClick={goBack}
        >
        <BsFillCaretLeftFill/>    
        </button>
        <p>{props.currentPage}</p>
        <button className='right-btn'
            disabled = {props.currentPage === 100? true : false}
            onClick={goForward}
        >
        <BsFillCaretRightFill/>
        </button>
    </div>
    )
}

export default Navigator