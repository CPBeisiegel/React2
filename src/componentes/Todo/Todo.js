import React from 'react';

import Botao from '../Botao/Botao';

import './Todo.css';

class Todo extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input placeholder="Digite sua tarefa" />
                    <Botao

                        classe="add"
                        titulo="Adicionar"
                        tipo="submit" 
                    />
                </form>
                <Botao
                    classe="removeAll"
                    titulo="Remover todas as tarefas"
                    tipo="button"
                />    



            </div>
        );
    }

}

export default Todo;