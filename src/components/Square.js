import React from 'react';
function Square(props){
    let currentState = () => {
        props.clickSquare(props.id);
    }
    return(
        <div className="board__item">
            <button onClick={currentState}>{props.content}</button>
        </div>
    );
}
export default Square;