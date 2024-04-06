import React from 'react'
import { CardTitle, Row } from 'react-bootstrap'
import bento from '../../img/bento.png'


const Historia = () => {
  return (
    <div className='section-historia'>
        <div className='container border'>
            <Row className='border'>
                <div className='historia-titles col-6 border'>
                    <h1 className>NOSSA HISTORIA</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        .</p>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate at rerum quasi, illo quam accusantium in reiciendis maiores 
                        vitae distinctio ratione voluptas nihil. Impedit dolorem rerum nesciunt incidunt? Aliquam, culpa.</p>
                </div>

                <div className='col-6'>
                    <img className='bento' src={bento} alt=""/>
                </div>

            </Row>
        
    </div>
    </div>
  )
}

export default Historia