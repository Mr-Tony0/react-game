import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import App from '../App';
import {clickSquare} from '../data/data'

function render(props){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <App data = {props.square} clickSquare = {clickSquare} />
    </React.StrictMode>
    );
}

export default render;