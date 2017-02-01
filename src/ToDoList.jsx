import React from 'react';
import ToDo from './ToDo';

var ulStyle = {
	listStyleType: 'none'
};
class ToDoList extends React.Component{
	
	render(){

		var items = this.props.toDos;
		return (
			<ul style={ulStyle}>
				{
					items.map(function(toDo){
						return(
							<ToDo key={toDo.id} 
								  toDo={toDo} 
								  removeToDo={this.props.removeToDo}
							/>
						);
						
					}, this)
				}
			</ul>
		);
	}
}

module.exports = ToDoList;