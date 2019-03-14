import React from 'react';
import ReactDOM from "react-dom";



class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    render() {
        return (
           "Hello world",
               <button className='x' onClick={()=>{this.setState({value:'X'})}}> {this.state.value} </button>
    );
    }

}


ReactDOM.render(
    <Square/>,
document.getElementById('root')
)
