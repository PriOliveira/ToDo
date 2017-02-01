import {EventEmitter} from 'events';
import Dispatcher from './Dispatcher';

class ToDoStore extends EventEmitter{
	constructor(){
		super();
		this.data = [{
	      id: 13136456,
	      text: "Everything"
	    }]
	}

	_getAll(){
		return this.data;
	}

	_addToDo(toDo){
	    this.data.push(toDo);
	    this.emit("change");
	}

  	_removeToDo(id){   
		this.data = this.data.filter(function(toDo){
		  if(toDo.id !== id) 
		    return toDo;
		});
		this.emit("change");
  	}

	_handleActions(action){
		switch(action.type){
			case 'ADD_TODO': {
				this._addToDo(action.data);
				break;
			}
			case 'REMOVE_TODO': {
				this._removeToDo(action.data);
				break;
			}
			default: {
				break;
			}
		}
	}
}

const toDoStore = new ToDoStore();
Dispatcher.register(toDoStore._handleActions.bind(toDoStore));

export default toDoStore;