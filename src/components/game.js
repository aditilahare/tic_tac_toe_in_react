import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Square extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className='square' onClick={this.props.onClick}
                    style={{width: 50, height: 50}}> {this.props.value} </button>
        );
    }

}

class Board extends Component {

    renderSquare(input) {
        return (
            <Square
                value={this.props.squares[input]}
                onClick={() => {
                    this.props.onClick(input)
                }}
            />
        )

    }

    render() {
        return (
            <div>
                <div className='row-one'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                <div className='row-two'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>

                <div className='row-three'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>

        )
    }

}

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            playerMoves: Array(),
            xIsNext: true
        };

        this.handleClick = this.handleClick.bind(this);
        this.checkForWinner = this.checkForWinner.bind(this);
    }

    handleClick(input) {
        const squares = this.state.squares;
        squares[input] = this.state.xIsNext ? 'X' : 'O';

        const playerMoves = this.state.playerMoves;

        if (playerMoves.length >= 4) {
            this.checkForWinner(squares);
        }

        return (
            this.setState({
                squares: squares,
                xIsNext: !this.state.xIsNext,
                playerMoves: [...this.state.playerMoves, input]
            })
        )
    }

    checkForWinner(squares) {
        // const playerMoves = this.state.playerMoves;

        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let index = 0; index < winningCombinations.length; index++) {
            const [a, b, c] = winningCombinations[index];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                console.log("You won!");
            }
        }
    }

    render() {
        return (
            <Board
                squares={this.state.squares}
                onClick={this.handleClick}
            />
        )
    }
}


ReactDOM.render(
    <Game/>,
    document.getElementById('root')
)