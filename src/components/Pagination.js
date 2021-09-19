import React from 'react'

function Pagination({getNextPage, getPrevPage}) {

const styleGo ={
    width: "2rem",
    height: "2rem",
    backgroundColor: "green",
    color: "white",
    cursor: "pointer",
    borderRadius: "50%",
}
const styleStop ={
    width: "2rem",
    height: "2rem",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
}
console.log("pagination rendered")
    return (
        <div>
            {getPrevPage ? <button style={styleGo} onClick={getPrevPage}>{"<<"}</button> :
                        <button style={styleStop}>!</button> 
            }
           {getNextPage ? <button style={styleGo} onClick={getNextPage}>{">>"}</button>:
           <button style={styleStop}>!</button>
           }
        </div>
    )
}

export default React.memo(Pagination);