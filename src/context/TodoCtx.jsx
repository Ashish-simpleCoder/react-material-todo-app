import { createContext, useState } from "react";

export const TodoCtx = createContext()

export default function CtxProvider(props){
    const [todos,setTodos] = useState(JSON.parse(localStorage.getItem('todos'))||[])
    return(
        <TodoCtx.Provider value={{todos,setTodos}}>{props.children}</TodoCtx.Provider>
    )
}