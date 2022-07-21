import React from 'react'
import Contact from './Contact'
import Main from './Main'
import Footer from './Footer'
import AboutPage from '../Pages/AboutPages'




function Home() {
  return (
    <div className=''>
      <Main />
      <AboutPage/>
     <Contact/>
      <Footer />
    </div>

  )
}

export default Home