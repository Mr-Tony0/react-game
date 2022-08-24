import logo from './logo.svg';
import './App.scss';
import Board from './components/Board';

function App(props) {
  return (
    <div className="App">
      {/* {renderSquare(props.data, props.clickSquare, props.renderSquare)} */}
      <Board data={props.data} clickSquare={props.clickSquare} renderSquare = {props.renderSquare}/>
    </div>
  );
}

export default App;
