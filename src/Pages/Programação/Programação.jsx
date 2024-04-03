import React from 'react'
import cultos from '../../img/cultos.png'
import libertacão from '../../img/libertação.png'
import family from '../../img/family.jpg'



const Programação = () => {
  return (
    <div className='programacao'>
        <h1 className='title'>NOSSA PROGRAMAÇÃO</h1>
        <p className='p-text'>PASSE O CURSOR EM CIMA DOS CARDS</p>
    
   <div className='section-cards'>
   
            
    
            <div className='cards'>

                <img src={family} alt="" />
                <div className='cards-body'>
                    <h1>DOMINGO</h1>
                    <h2>CULTO DA FAMILIA</h2>
                    <h3>MANHÃ - 8H30</h3>
                    <h3>EBD - 10 HORAS</h3>
                    <h3>NOITE - 18 HORAS</h3>
                    <br/>
                    <h3 className='ceia'>CEIA - 1º DOMINGO DO MÊS</h3>
                    
                </div>
            </div>

            <div className='cards'>
                <img src={cultos} alt="" />
                <div className='cards-body'>
                    <h1>QUARTA-FEIRA</h1>
                    <h2>CULTO DE DEPARTAMENTOS</h2>
                    <h3>1º LOUVOR</h3>
                    <h3>2º HOMENS</h3>
                    <h3>3º JOVENS</h3>
                    <h3>4º MULHERES</h3>
                    <h3 className='time'>20 HORAS</h3>
                </div>
            </div>

            <div className='cards'>
                <img src={libertacão} alt="" />
                <div className='cards-body'>
                    <h1>SEXTA-FEIRA</h1>
                    <h2>CULTO DE LIBERTAÇÃO</h2>
                    <h3 className='time'>20 HORAS</h3>
                </div>
            </div>

            
  
   </div>
   <div className='informacoes-finais'>
   <button>QUERO CONHECER</button>
   <h6>RUA NORIVAL LARCERDA, 138 <br/> JARDIM MARIA VIRGINIA</h6>
   </div>
            
   </div>
  )
}

export default Programação