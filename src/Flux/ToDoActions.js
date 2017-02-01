import Dispatcher from './Dispatcher';

export function addToDo(toDo){
	Dispatcher.dispatch({
		type: 'ADD_TODO',
		data: toDo
	});
}

export function removeToDo(id){   
	Dispatcher.dispatch({
		type: 'REMOVE_TODO',
		data: id
	});
}