import React from 'react'
import { render } from 'react-dom'
import './style.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Person from './components/Person/Person.jsx'
import NavButtons from './components/NavButtons/NavButtons.jsx'
import ArticlesCV from './components/ArticlesCV/ArticlesCV.jsx'
import Footer from './components/Footer/Footer.jsx'
import { ViewProvider } from './context/ViewContext.jsx'

const App = () => {

  return(
    <>
      <ViewProvider>
        <header id="root"
          className="container"
        >
          <Navbar />
          <Person />
        </header>
        <main>
          <NavButtons/>
          <ArticlesCV />
        </main>
      </ViewProvider>
      <Footer/>
    </>
  )
}


render(React.createElement(App), document.getElementById('root'));
