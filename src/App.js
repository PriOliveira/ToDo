import React from 'react';
import NewToDo from './NewToDo';
import Title from './Title';
import ToDoList from './ToDoList';
//import './App.css';


import ToDoStore from './Flux/ToDoStore';
import * as ToDoActions from './Flux/ToDoActions';

window.id = 0;
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: ToDoStore._getAll()
    }
  }

  _addToDo(value){
    ToDoActions.addToDo({
      id: ++window.id,
      text: value
    });
  }

  _removeToDo(id){
    ToDoActions.removeToDo(id);
  }

  _getToDos(){
    this.setState({
      data: ToDoStore._getAll()
    });
  }

  componentWillMount() {
    ToDoStore.on('change', this._getToDos.bind(this));
  }

  componentWillUnmount() {
    ToDoStore.removeListener('change', this._getToDos.bind(this));
  }

  render() {    
    return (
      <div> 
        <Title />
        <NewToDo addToDo={this._addToDo.bind(this)}/>
        <hr />
        <ToDoList toDos={this.state.data} removeToDo={this._removeToDo.bind(this)}/>
      </div>
    );
  }
}

export default App;
