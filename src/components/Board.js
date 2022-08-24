import Square from './Square'
function Board(props) {
    let createField = props.data.map(element => {
        return <Square clickSquare={props.clickSquare} id={element.id} content={element.content} state={element.state}/>
    });
    return (
      <div className="board">
        {createField}
      </div>
    );
}

export default Board;
  