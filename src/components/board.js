import React, { Component } from 'react';
import Square from '../containers/square';

export default class Board extends Component {

    renderSquare(input){
        return(
            <Square
                value={this.props.squares[input]}
                onClick={()=> {this.props.onClick(input)}}
            />
        )

    }

    render() {
        return(
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
