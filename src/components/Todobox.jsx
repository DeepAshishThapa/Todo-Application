import { useTodo } from "../contexts/Todocontext"
import { HugeiconsIcon } from '@hugeicons/react';
import { Cancel01Icon } from '@hugeicons/core-free-icons';
import { Edit03Icon } from '@hugeicons/core-free-icons';
import { useState } from "react";


export const Todobox = ({ todo }) => {
    const { toggletodo, deletetodo,updatetodo } = useTodo()
    const [isedible, setisedible] = useState(false)
    const [todomsg, settodomsg] = useState(todo.todo)


    return (
        <>

            <div key={todo.id} className={`h-11 ${todo.completed ? 'bg-green-200' : 'bg-blue-100'} rounded-md px-5 flex items-center font-semibold gap-5`}>


                <input type="checkbox" onChange={() => toggletodo(todo.id)} checked={todo.completed} />
                <input type="text" className={`${todo.completed ? "line-through text-black" : ""} w-full px-1 py-1 rounded-md border-gray-400 ${isedible ? 'border-2' : 'border-0'} outline-none`}
                    value={todomsg} onChange={(e) => settodomsg(e.target.value)} readOnly={!isedible}

                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            updatetodo({id:todo.id,todo:todomsg,completed:false},todo.id)

                            setisedible(false); // Exit edit mode
                            // Optionally, update the todo in context here
                            // updateTodo(todo.id, todomsg);
                        }
                    }}
                >




                </input>


                <HugeiconsIcon
                    icon={Cancel01Icon}
                    size={24}
                    color="#d0021b"
                    strokeWidth={2.5}
                    className="hover:cursor-pointer hover:text-black"
                    onClick={() => deletetodo(todo.id)}

                />
                <HugeiconsIcon
                    icon={Edit03Icon}
                    size={24}
                    color="#445b2d"
                    strokeWidth={2.5}
                    className="hover:cursor-pointer hover:text-black"
                    onClick={() => setisedible((prev) => !prev)}


                />


            </div>



        </>

    )
}