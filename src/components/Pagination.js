import React from 'react'

export default function Pagination({getNextPage, getPrevPage}) {

const style ={
    width: "3rem",
    backgroundColor: "green",
    color: "white",
    cursor: "pointer"
}

    return (
        <div>
            {getPrevPage ? <button style={style} onClick={getPrevPage}>Prev</button> :
                        <button style={style}>---</button> 
            }
           {getNextPage ? <button style={style} onClick={getNextPage}>Next</button>:
           <button style={style}>---</button>
           }
        </div>
    )
}
