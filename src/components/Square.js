function Square(props){
    let currentState = () => {
      
       props.clickSquare('x', props.id);
    }
    return(
        <div className="board__item">
            <button onClick={currentState}>{props.content}</button>
        </div>
    );
}
export default Square;