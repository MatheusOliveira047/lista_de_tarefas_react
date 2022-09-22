import React from 'react'
import './Form.css'

import PropsTypes from 'prop-types'

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



Form.PropsTypes = {
  handleChange: PropsTypes.func.isRequired,
  handleSubmit: PropsTypes.func.isRequired,
  novaTarefa: PropsTypes.string.isRequired,

}

export default Form