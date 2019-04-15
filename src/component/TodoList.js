import React, { Component } from 'react';
import TodoItem from '../component/TodoItem'

class TodoList extends Component {
    render() {
        const {items, handleDelete,handleEdit} = this.props;
        return (
            <div>
            <ul className="list-group">
                <h4>Todo List</h4>
                {items.map(item=>{
                    return <TodoItem key = {item.id} title={item.title}  
                    handleDelete={()=>handleDelete(item.id)}
                    handleEdit={()=>handleEdit(item.id)}/>
                })}
            </ul>
            </div>
        );
    }
}

export default TodoList;