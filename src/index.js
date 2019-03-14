import React from 'react';
import ReactDOM from "react-dom";


class Square extends React.Component{
 constructor(props){
     super(props);
     this.state = {
         value: null
     };
 }

 render() {
     return(
         "hello aditi"
     )
 }
}


ReactDOM.render(
    <Square />,
    document.getElementById('root')
);