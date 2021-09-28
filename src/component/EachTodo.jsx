import { useContext, useState} from "react"
import { TodoCtx } from "../context/TodoCtx"

export default function EachTodo({todo}){
    const [checked,setChecked] = useState(todo.checked)
    const [isEdit,setIsEdit] = useState()
    const {todos,setTodos} = useContext(TodoCtx)

    function checkTodo(){
        setChecked(!checked)
        let user_todos = JSON.parse(localStorage.getItem('todos'))
        localStorage.setItem('todos',JSON.stringify(user_todos.map(each_todo=>{
            if(each_todo.id === todo.id) return {...each_todo,checked:!checked}
            return each_todo
        })))
    }

    function handleEdit(){
        document.getElementById(todo.id).children[0].focus()
        setIsEdit(!isEdit)
        if(isEdit){
            const title = (document.getElementById(todo.id)).children[0].textContent
            let user_todos = JSON.parse(localStorage.getItem('todos'))
            localStorage.setItem('todos',JSON.stringify(user_todos.map(each_todo=>{
                if(each_todo.id === todo.id) return {...each_todo,title}
                return each_todo
            })))
        }
    }

    function deleteTodo(){
        let user_todos = JSON.parse(localStorage.getItem('todos'))
        localStorage.setItem('todos',JSON.stringify(user_todos.filter(each_todo=>each_todo.id !== todo.id)))
        // todos = todos.filter(each_todo=>each_todo !== todo.id)   //don't do this it will not rerender component
        setTodos(JSON.parse(localStorage.getItem('todos')))
    }



    return(
        <div className={'each_todo ' + (checked && 'completed')} id={todo.id}>
            <h3 contentEditable={isEdit} suppressContentEditableWarning='true'>{todo.title}</h3>
            <button className='check_btn' onClick={checkTodo}>check</button>
            <button className='edit_btn' onClick={handleEdit}>{isEdit ? 'save' : 'edit'}</button>
            <button className='delete_btn' onClick={deleteTodo}>delete</button>
        </div>
    )
}