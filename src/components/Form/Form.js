import React from 'react'
import './Form.css'

import {FaPlus} from 'react-icons/fa'


const Form = ({novaTarefa,handleChange,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} action="#" className='form'>

    <input 
      onChange={handleChange} 
      type="text"
      value={novaTarefa} 
    />

    <button type='submit'>
      <FaPlus/>
    </button>

  </form>
  )
}

export default Form