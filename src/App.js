import React from 'react';
import Todo from './componentes/Todo/Todo';
import Menu from './componentes/Menu/Menu';
import './estilos/global.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Todo />

      </div>
    );
  }
}


export default App;
