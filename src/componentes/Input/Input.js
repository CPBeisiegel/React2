import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
   render() {
       return (
           <input type={this.props.tipo} placeholder={this.props.caixaTexto} />
       );
   }
}

export default Input;