import React from 'react'

const SwitchVisibility = ({visibility=true, children=null}) => {
  return visibility?(
    children
  ):null
}

SwitchVisibility.schema ={
  title: 'Visibilidad de Componentes',

  type: 'object',
  properties: {
    visibility:{
          title:'Mostrar/Ocultar',
          type: 'boolean'
      },
  }
}

export default SwitchVisibility
