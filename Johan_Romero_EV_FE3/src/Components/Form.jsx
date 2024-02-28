import React, { useState } from 'react'
import Cart from './Cart'
const Form = () => {

    const [nombre, setNombre ]= useState ('')
    const [apellido, setApellido] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        if(nombre.length >= 3 && apellido.length >=6){
             return <Cart nombre={nombre} apellido={apellido}/>

        }else{
            return <div>La informacion es incorrecta!</div>
        }

    }
console.log(handleSubmit)
  return (
<div>
    
    <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)}  />
        <label >Apellido:</label>
        <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)}/>
        <button>Enviar</button>
    </form>
    
    </div>
  )
}

export default Form