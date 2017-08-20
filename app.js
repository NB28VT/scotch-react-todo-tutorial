window.id = 0;
class ToDoApp extends React.Component{
  constructor(props) {
    super(props);

    this.state = { 
      data: []
    }
  }

  addTodo(val) {
    // Assemble data
    const todo = {text: val, id: window.id}
    // Update data
    this.state.data.push(todo);
    // Update state
    this.setState({data: this.state.data})
  }

  handleRemove(id){
    const remainder = this.state.data.filter((todo) =>{
      if(todo.id !== id) return todo;
    })

    this.setState({data: remainder});
  }

   render(){
    // Render JSX
    return (
      <div>
        <Title />
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList 
          todos={this.state.data} 
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  
  }

}



const TodoForm = ({addTodo}) => {
  let input;

  return (
   <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}>
        +
      </button>
    </div>
    )
}

const ToDo = ({todo, remove}) => {
  return (<li onClick(remove(todo.id))>{todo.text})
}

const TodoList = ({todos,remove}) => {
  const todoNode = tdos.map((todo)=> {
    return (<Todo todo={todo} key={todo.id} remove={remove}/> )
  })
  return (<ul>{todoNode}</ul>)
}


const Title = () => {
  return (
    <div>
      <div>
        <h1>to-do</h1>
      </div>
    </div>
  )
}

ReactDOM.render(<ToDoApp />, document.getElementById('container'));
