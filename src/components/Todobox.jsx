import { useTodo } from "../contexts/Todocontext"
export const Todobox = ({ todos }) => {
    const {toggletodo}=useTodo()

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id} className={`h-11 ${todo.completed?'bg-green-200':'bg-blue-100'} rounded-md px-5 flex items-center font-semibold`}>
                    <div className="flex gap-2 ">

                    <input type="checkbox" onChange={()=>toggletodo(todo.id)} checked={todo.completed}/>
                    {todo.todo}
                    </div>
                </div>

            ))}
        </>

    )
}