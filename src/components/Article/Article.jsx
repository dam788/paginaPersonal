import React from 'react'
import './article.css'

const Article = ({
  children, 
  id, 
  title='titulo'
  }) => {
  
  return (
    <div id={id} className="articleSection">
      <h2 className="titleArticle">{title}</h2>
      <hr/>
      {children}
    </div>
  )
}

export default Article
