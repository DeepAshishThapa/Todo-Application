import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todoform } from './components/Todoform'
import { useTodo } from './contexts/Todocontext'
import { Todobox } from './components/Todobox'

function App() {
  const [count, setCount] = useState(0)
  const { todos } = useTodo()

  return (
    <>

      <div className='font-bold text-white text-2xl text-center py-8'>Manage Your Todos</div>
      <div className='w-[70vw] m-auto flex flex-col gap-4 '>
        <Todoform />

       
        <Todobox todos={todos}/>
      </div>


    </>
  )
}

export default App
