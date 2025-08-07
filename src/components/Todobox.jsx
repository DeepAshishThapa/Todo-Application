    export const Todobox=({todos})=>{
        return(
            <>
            {todos.map((todo)=>(
                <div key={todo.id} className="h-11 bg-blue-100 rounded-md px-5 flex items-center font-semibold">{todo.todo}</div>
                
            ))}
            </>
            
        )   
    }