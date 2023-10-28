import  { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from './About'
import Expertise from './Expertise'
import Experience from './Experience'
import History from './History'
import Featured from './Featured'
import Download from './Download'
import Contact from './Contact'

const LandingPage = () => {
    const [first, setfirst] = useState<string>()
  return (
    <main className='landing h-screen w-full flex flex-col items-center'>
      <Header/>
      <Footer/>
      <Hero/>
      <About/>
      <Expertise/>
      <Experience/>
      <History/>
      <Featured/>
      <Contact/>
    </main>
  )
}

export default LandingPage