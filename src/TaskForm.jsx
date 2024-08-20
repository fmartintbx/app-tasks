import { useState } from "react"

function TaskForm() {

   const [title, setTitle] = useState("")

  return (
    
        <form> 
            <input placeholder="Escribe tu tarea" 
            onChange={(e) => {setTitle(e.target.value)}}
            
            />
            <button> 
                Guardar
            </button>
        </form>
    
  )
}

export default TaskForm