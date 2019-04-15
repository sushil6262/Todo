import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

class App extends Component {
  state={
    items:[{id:1,title:"hello world"}],
    title:'',
    id:uuid(),
    editItem:false
  }
  handleChange=(e)=>{
    this.setState({
      title:e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const newItem={
      id:this.state.id,
      title:this.state.title
    }
    const updateItem = [...this.state.items,newItem];
    this.setState({
      items:updateItem,
      id:uuid(),
      title:'',
      editItem:false
    })

  }

  handleDelete=(id)=>{
    const deletData =this.state.items.filter(item=>{
      return item.id !== id
    })
    this.setState({
      items:deletData
    })
  }
  handleEdit=(id)=>{
    const deletData =this.state.items.filter(item=>{
      return item.id !== id
    })
    const editItem = this.state.items.find(item=> item.id === id) ; 
    this.setState({
      items:deletData,
      title:editItem.title,
      id:id,
      editItem:true
    })
  }
  render() {
    return (
      <div className="container py-4 ">
        <div className="row">
          <div className="col-md-6 offset-3">
            <TodoForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} title={this.state.title}/>
            <TodoList items={this.state.items} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
