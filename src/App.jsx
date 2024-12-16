import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import NewsContainer from './Components/NewsContainer/NewsContainer'

const App = () => {
  const [showBtn, setShowBtn] = useState(false)
  const handleOnUpClick = () => {
    window.scrollTo(0,0)
  }

  window.addEventListener("scroll" , () => {
    window.scrollY > 100 ? setShowBtn(true) : setShowBtn(false)
  })
  return (
    <div className='App'>
      <div className={`up-side ${showBtn ? "Show" : ""}`} onClick={() => {handleOnUpClick()}}>
      <i class="fa-solid fa-arrow-up-long"></i>
      </div>
      <Navbar/>
      <NewsContainer/>
    </div>
  )
}

export default App
