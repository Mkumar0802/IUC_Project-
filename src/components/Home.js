import React from 'react'
import Contact from './Contact'
import Main from './Main'
import AboutPage from '../Pages/AboutPages'
import Services from './Services'





function Home() {
  return (
    <div className=''>
      <Main />
      <AboutPage />
      <Services/>
      <Contact />

    </div>

  )
}

export default Home