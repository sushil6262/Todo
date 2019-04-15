import React, { Component } from 'react';

class TodoForm extends Component {
    render() {
        const {title, handleChange,handleSubmit,editItem}= this.props
        const enabled= title.length>=5;
        return (
            
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={title} placeholder="todo" onChange={handleChange} required className="form-control"/>
                            <br/>
                            <button className="btn btn-primary col-md-12" disabled={!enabled}>{editItem?"edit":"Submit"}</button>
                        </form>
                    
        );
    }
}

export default TodoForm;