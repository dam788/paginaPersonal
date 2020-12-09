import React from 'react'
import './article.css'

const Article = ({children, id, title='titulo'}) => {
  
  return (
    <div id={id} className="articleSection">
      <h3>{title}</h3>
      <hr/>
      {children}
    </div>
  )
}

export default Article
