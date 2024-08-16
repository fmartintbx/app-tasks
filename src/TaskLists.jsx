
import { tasks } from './tasks'
import { useState, useEffect } from 'react'

console.log(tasks)
export default function TaskLists() {
   
  const [tasks, setTasks] = useState([])
  
  useEffect(() => { 
   setTasks(tasks)
  }, [])

  if (tasks.length === 0) {
       return <h1>No hay tareas aun</h1>
  }
  return (
    <div> 
      { 
        tasks.map(task =>  {  
        <div>tarea</div>

        })
      }
    </div>
  )
}
