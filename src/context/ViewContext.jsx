import React,{createContext, useState} from 'react'

export const ViewContext = createContext();



  const proyects = [    {
      title: 'FrontEnd Mentor 1', 
      description:'Es un challenge prototipado y maquetado en HTM,CSS', 
      photo: '', 
      link1: '', 
      link2: '',
      tecnology: ['adobeXd','maquetado']
    },{
      title: 'FrontEnd Mentor 2', 
      description:'Es un challenge prototipado y maquetado en HTM,CSS', 
      photo: '', 
      link1: '', 
      link2: '',
      tecnology: ['adobeXd','maquetado']
    },{
      title: 'Ecommerce Nerd King', 
      description:'Un ecommerce desarrollado en HTML, CSS y JS, la lógica es solo a prueba.', 
      photo: '', 
      link1: '', 
      link2: '',
      tecnology: ['js', 'maquetado']
    },{
      title: 'Juego Ahorcado', 
      description:'Juego desarrollado en HTML, CSS y JS', 
      photo: '', 
      link1: '', 
      link2: '',
      tecnology: ['js', 'maquetado']
    }
  ]

export const ViewProvider = ({children})=> {
  
  const [view, setView] = useState(true) //logica de boton de vista
  const [filter, setFilter] = useState('')

  return(
    <ViewContext.Provider value={{
      view,
      setView,
      proyects,
      filter,
      setFilter
    }}>
      {children}
    </ViewContext.Provider>
  )
}