import { useContext,lazy,Suspense} from "react";
import { TodoCtx } from "../context/TodoCtx";
const EachTodo = lazy(()=>import('./EachTodo'))

export default function FormOutput(){
    const {todos,setTodos} = useContext(TodoCtx)

    return(
        <section id="todo_output">
            <Suspense fallback={<h1>loading...</h1>}>{todos.map((todo,index)=><EachTodo key={index} todo={todo}/>)}</Suspense>
        </section>
    )
}