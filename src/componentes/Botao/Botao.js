import React from 'react';
import './Botao.css';


class Botao extends React.Component{
    render(){
        return (

            <button 
            className={this.props.classe} 
            type={this.props.tipo} 
            onClick={this.props.aoClicar}
            >
                {this.props.titulo}
            </button>    

        );
    }

}

export default Botao;