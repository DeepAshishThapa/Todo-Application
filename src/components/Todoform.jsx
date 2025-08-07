import { useState } from "react"
import { useTodo } from "../contexts/Todocontext"

export const Todoform=()=>{
     const [todo,settodo]=useState('')
     const {addtodos}=useTodo()
     const add=(e)=>{
        e.preventDefault()
        if (!todo)
            return
        addtodos({todo:todo,completed:false})
        settodo('')



        
     }
    return(
        <form className="flex w-[100%]">
            <input 
            type="text" 
            placeholder="write todo..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 placeholder-gray-400 text-white"
            value={todo}
            onChange={(e)=>settodo(e.target.value)}
            />

            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            onClick={add}
            >
                Add
            </button>

        </form>

    )
}