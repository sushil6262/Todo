import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const {title,handleDelete,handleEdit} = this.props
        return (
            <div>
                <li className="list-group-item text-capitalize my-2 d-flex justify-content-between">
                    <h6 style={{color:"#000"}}>{title}</h6>
                    <div>
                        <span className="btn btn-danger mr-2" onClick={handleDelete}>x</span>
                        <span className="btn btn-primary" onClick={handleEdit}>/</span>
                    </div>
                </li>
            </div>
        );
    }
}

export default TodoItem;