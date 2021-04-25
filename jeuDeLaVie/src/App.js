
import React, { Component } from 'react';
import './App.css';
import Game from './Components/Game';
import './Game.css';

class App extends Component {

    render() {

        return (
            <div className="App">
                <h1> Jeu de la vie </h1>
                <Game />
            </div>
        );
    }
}

export default App;
