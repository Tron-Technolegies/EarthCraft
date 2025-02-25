import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <About/>
    </div>
  )
}

export default App
