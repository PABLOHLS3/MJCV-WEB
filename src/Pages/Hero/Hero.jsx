import React from 'react'
import logo from "../../img/logo.png"

const Hero = () => {
  return (
    <>
      <div className='hero container-fluid'>
        <div className='nav-bar'>
        <div>
            <img src={logo} alt="" />
        </div>
        
        <div className='links'>
            <ul>
                <li><a href="">Programação</a></li>
                <li><a href="">Sobre Nós</a></li>
                <li><a href="">Oração</a></li>
                <li><a href="">Proximos Eventos</a></li>
                <li><a href="">Fotos e Grupos</a></li>
            </ul>
        </div>

        </div>
        
        <div className=' texts container'>
            <div className='col-5 '> 
            <h1>Ministério</h1>
            </div>
       
        <div className='jesus container'>
            <div className='col-1 '> </div>
                <div className='col-11 '> 
                <h1>JESUS CRISTO</h1>
                </div>
            
        </div>
        <div className=' verdade container'>
            <div className='col-7 '> 
            <h1>É a Verdade</h1>
            </div>

        </div>
        <div className='container'>
            <div className='col-5 '> 
            <p>Isaías 43:13 ARC <br/>Ainda antes que houvesse dia, eu sou; e ninguém há que possa fazer escapar das minhas mãos: operando eu, quem impedirá?</p>
            </div>

             </div>
        </div>
    </div>

        

        </>     
  )
}

export default Hero