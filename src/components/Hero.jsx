import React from 'react'
import { logo } from '../assets'
const Hero = () => {
  return (
    <header className=" w-full flex justify-center items-center flex-col" >
        <nav className="flex justify-between items-center w-full mb-10 pt-3" >
            <h4 className="w-28 object-contain head_text" ><span className="orange_gradient">Breviter</span></h4>
            
            <button type="button" onClick={() => window.open('https://hawudigitals.com')} className="black_btn" > Portfolio </button>

        </nav>
        <h1 className="head_text" >
            Summarize Articles,Essays & More With <br className="max-md:hidden" />
            <span className="orange_gradient">Breviter AI</span>

        </h1>
        <h2 className="desc" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corporis quibusdam tempora eveniet blanditiis, dolor quisquam sed totam. Quo, eligendi.</h2>
    </header>
  )
}

export default Hero