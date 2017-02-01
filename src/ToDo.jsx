import React from 'react';

class ToDo extends React.Component{
	handleClick(toDo, event){
		this.props.removeToDo(toDo.id);
	}

	render(){
    	return (
            
            <li onClick={this.handleClick.bind(this, this.props.toDo)}>
                <button className="btn btn-default">
                    {this.props.toDo.text}
                </button>
            </li>
    		
    	);
    }
}

module.exports = ToDo;