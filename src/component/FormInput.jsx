import { useContext } from "react"
import { TodoCtx } from "../context/TodoCtx"

export default function FormInput(){
    const {setTodos} = useContext(TodoCtx)

    function genNote(e){
        e.preventDefault()
        if(!window.todo.value) return
        let user_todos = JSON.parse(localStorage.getItem('todos')) || []
        user_todos = [{title : window.todo.value,id: Date.now(),checked:false},...user_todos]
        localStorage.setItem('todos',JSON.stringify(user_todos))
        setTodos(user_todos)
        window.todo.value =''
    }
    return(
        <form id="todo_inputs">
            <input type="text" id='todo' title='type a new todo' area-label='type todo' placeholder="create new todo" />
            <button id='todo_gen_btn' onClick={genNote}>+</button>
        </form>
    )
}