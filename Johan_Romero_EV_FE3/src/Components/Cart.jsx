import React from 'react'

const Cart = ({datos}) => {
    console.log(datos)
  return (
    <div><h1>{datos.nombre}{datos.apellido} Quedo registrado!</h1></div>
  )
}

export default Cart