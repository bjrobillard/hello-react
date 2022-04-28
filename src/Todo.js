import React from 'react';

function Todo(props) {
    let name = props.todo.name;
    if(props.todo.isDone)
        name = <s style={{color: "red"}}>{name}</s>

    return (
            <li key={props.key} onClick={props.updateTodo}>{name}</li>
    )
}

function Todos() {
    const [todos, setTodos] = React.useState([])
    function addTodos() {
        let newtodos = [...todos, {name:document.getElementById('todo_text').value, isDone:false}]
        setTodos(newtodos);
    }

    function updateTodo() {
        
    }
    
    return (
        <>
            <h2>My Todos</h2>
            <ul>
                {
                    todos.map((todo, index) => <Todo index={index} todo={todo} updateTodo={updateTodo} />)
                }
            </ul>
            <label>New Todo: </label>
            <input type="text" id="todo_text"></input>
            <button type='button' onClick={addTodos}>Add</button>
        </>
    )
}

export default Todos;