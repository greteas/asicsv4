import React from 'react'

const SwitchVisibility2 = ({visibility=true, children=null}) => {
  return visibility?(
    children
  ):null
}

SwitchVisibility2.schema ={
  title: 'Visibilidad de Componentes',

  type: 'object',
  properties: {
    visibility:{
          title:'Mostrar/Ocultar',
          type: 'boolean'
      },
  }
}

export default SwitchVisibility2
