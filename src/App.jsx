import { Suspense } from "react"
import { lazy } from "react"
import FormInput from "./component/FormInput"
import Header from "./component/Header"
import CtxProvider from "./context/TodoCtx"
import "./styles/index.css"
const FormOutput = lazy(()=>import('./component/FormOutput'))


export default function App(){
    return(
        <CtxProvider>
            <Header/>
            <FormInput/>
            <Suspense fallback={<h1>loading....</h1>}>
                <FormOutput/>
            </Suspense>
        </CtxProvider>
    )
}