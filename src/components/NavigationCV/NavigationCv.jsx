import React from 'react'
import './navigationCv.css'

const NavigationCv = ({children}) => {
  return (
    <>
      <div className="options">
        {children}
      </div>
    </>
  )
}

export default NavigationCv
