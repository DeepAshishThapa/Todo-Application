import { createContext, useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";

export const Todocontext=createContext(null)

export const Todoprovider=({children})=>{
    const [todos,settodos]=useState([])
    const addtodos=(todo)=>{
        settodos((prevtodos)=>[{id:Date.now(),...todo},...prevtodos])

    }

    const updatetodo=(todo,id)=>{
        settodos((prevtodos)=>prevtodos.map((prevtodo)=>(prevtodo.id===id?todo:prevtodo)))

    }

    const deletetodo=(id)=>{
        settodos((prevtodos)=>prevtodos.filter((prevtodo)=>(id!==prevtodo.id)))

    }

    const toggletodo=(id)=>{
        settodos((prevtodos)=>prevtodos.map((prevtodo)=>(id===prevtodo.id?{...prevtodo,completed:!prevtodo.completed}:prevtodo)))

    }

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))


    },[todos])

    useEffect(()=>{
        const localtodos=JSON.parse(localStorage.getItem("todos"))
        if (localtodos&&localtodos.length>0){
            settodos(localtodos)
        }


    },[])
    return(
        <>
        <Todocontext.Provider value={{todos,addtodos,deletetodo,toggletodo,updatetodo}}>
            {children}

        </Todocontext.Provider>

        </>
    )
}

export const useTodo=()=>useContext(Todocontext)