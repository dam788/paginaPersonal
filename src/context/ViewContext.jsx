import React,{createContext, useState} from 'react'
import {proyects} from '../data/data'

export const ViewContext = createContext();


export const ViewProvider = ({children})=> {
  
  const [view, setView] = useState(true) //logica de boton de vista
  const [filter, setFilter] = useState('Todo')


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