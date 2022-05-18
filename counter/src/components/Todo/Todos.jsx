import React from 'react'

const Todos = () => {
    const [task,setTask] = React.useState("") ;
    const [todos,setTodos]  =React.useState([]);
    const handleChange =(e)=>{
        setTask(e.currentTarget.value)
    }
    const addTodo = ()=>{
        console.log(task)
        setTodos([...todos,task]);
        console.log(todos)
        setTask("")
    }
    return (
        <div>
            <h1>
                Todo
            </h1>
            <input type="text" value={task} onChange={e=>handleChange(e)}/>
            <button onClick={addTodo}>Add Todo</button>
            {
                todos.map(ele=><p>{ele}</p>)
            }
        </div>
    )
}

export default Todos
