import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

export const Todocontext=createContext(null)

export const Todoprovider=({children})=>{
    const [todos,settodos]=useState([])
    const addtodos=(todo)=>{
        settodos((prevtodos)=>[{id:Date.now(),...todo},...prevtodos])

    }

    const updatetodo=(todo,id)=>{
        settodos((prevtodos)=>prevtodos.map((prevtodo)=>(prevtodo.id==id?todo:prevtodo)))

    }

    const deletetodo=(id)=>{
        settodos((prevtodos)=>prevtodos.filter((prevtodo)=>(id!==prevtodo.id)))

    }

    const toggletodo=(id)=>{
        settodos((prevtodos)=>prevtodos.map((prevtodo)=>(id==prevtodo.id?{...prevtodo,completed:!prevtodo.completed}:prevtodo)))

    }
    return(
        <>
        <Todocontext.Provider value={{todos,settodos,addtodos,deletetodo,toggletodo,updatetodo}}>
            {children}

        </Todocontext.Provider>

        </>
    )
}

export const useTodo=()=>useContext(Todocontext)