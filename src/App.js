import React from 'react'

//CONTAINERS
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from "./containers"

// COMPONENTS
import { Brand, CallToAction, Navbar } from './components'

//STYLES
import "./App.css"


const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CallToAction/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App