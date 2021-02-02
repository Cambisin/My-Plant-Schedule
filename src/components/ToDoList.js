import React from "react";
import { Frame, Wrapper, CardHeader, Delete, ListItem, AddButton, Form, Input } from "./ToDoListStyle";

class PlantCareToDo extends React.Component  {
    state = {
      tasks: ['Remove button >']
    };
  
    handleSubmit = task => {
      this.setState({tasks: [...this.state.tasks, task]});
    }
    
    handleDelete = (index) => {
      const newArr = [...this.state.tasks];
      newArr.splice(index, 1);
      this.setState({tasks: newArr});
    }
  
    render() {
      return(
        <Wrapper>
          <Frame>
            <Header numTodos={this.state.tasks.length} />
            <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
            <SubmitForm onFormSubmit={this.handleSubmit} />
          </Frame>
        </Wrapper>
      );
      }
  }
  
  
  class SubmitForm extends React.Component {
    state = { term: '' };
  
    handleSubmit = (e) => {
      e.preventDefault();
      if(this.state.term === '') return;
      this.props.onFormSubmit(this.state.term);
      this.setState({ term: '' });
    }
  
    render() {
      return(
        <Form onSubmit={this.handleSubmit}>
          <Input
            type='text'
            className='input'
            placeholder='Enter Task'
            value={this.state.term}
            onChange={(e) => this.setState({term: e.target.value})}
          />
          <AddButton className='button'>S U B M I T</AddButton>
        </Form>
      );
    }
  }
  
  
  const Header = (props) => {
    return(
      <div>
        <CardHeader>
          {props.numTodos} PLANT DUTIES
        </CardHeader>
      </div>
    )
  }
  
  
  const TodoList = (props) => {
    const todos = props.tasks.map((todo, index) => {
      return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    })
    return( 
      <div className='list-wrapper'>
        {todos}
      </div>
    );
  }
  
  const Todo = (props) => {
    return(
      <ListItem>
        {props.content}
        <Delete onClick={() => {props.onDelete(props.id)}}></Delete>
      </ListItem>
    );
  }

export default PlantCareToDo;