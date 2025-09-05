import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Companies from './components/companies/Companies'
import Residencies from './components/residencies/Residencies'
import Value from './value/Value'
import Contact from './contact/Contact'
import GetStarted from './getStarted/GetStarted'
import Footer from './footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' overflow-x-clip '>
      <div className='bg-background relative '>
          <div className='absolute w-[18rem] h-[18rem] bg-gray-500 blur-[100px]'/>
          <Header></Header>
          <Hero></Hero>
      </div>
      <Companies></Companies>
      <Residencies></Residencies>
      <Value></Value>
      <Contact></Contact> 
      <GetStarted></GetStarted>
      <Footer></Footer>
    </div>
     
    </>
  )
}

export default App
