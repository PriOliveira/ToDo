import React from 'react';

class NewToDo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			task: ''
		};
	}

	handleChange(event){
		this.setState({
			task: event.target.value
		});
	}

	handleClick(event){
		this.props.addToDo(this.state.task);
		this.setState({
			task: ''
		});
	}

	render(){
		return (
			/*<div>
				<input type="text" placeholder="New Task" 
					onChange={this.handleChange.bind(this)} 
					value={this.state.task}
					className="form-control" 
					id="newTask"
				/>
				<button onClick={this.handleClick.bind(this)}
				className="btn btn-primary"> Add + </button>
			</div>*/

			<div className="row">
			  <div className="col-lg-6">
			    <div className="input-group">
			      <input type="text" className="form-control" 
			      		 placeholder="New Task" id="newTask"
			      		 onChange={this.handleChange.bind(this)} 
						 value={this.state.task}
				  />
			      <span className="input-group-btn">
			        <button className="btn btn-primary" type="button"
			        		onClick={this.handleClick.bind(this)}>
			        	+
			        </button>
			      </span>
			    </div>
			  </div>
			</div>
		);
	}
}

module.exports = NewToDo;