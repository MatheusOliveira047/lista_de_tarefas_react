import React from 'react'
import { FaEdit,FaWindowClose } from 'react-icons/fa'
import './Tarefas.css'

const Tarefas = ({tarefas,handleDelete,handleEdit}) => {
  return (
    <ul className='tarefas'> 
    {tarefas.map((tarefa,index) => (
      <li key={tarefa}>
        
        {tarefa}
        <span>
            <FaEdit 
              onClick={(e)=>handleEdit(e, index)}
              className='edit'
            />
            <FaWindowClose 
              onClick={(e)=>handleDelete(e, index)}
              className='delete'
            />
        </span>
      </li>
    ))}
</ul>
  )
}

export default Tarefas