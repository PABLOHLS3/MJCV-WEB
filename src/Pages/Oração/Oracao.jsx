import React from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap'

const Oracao = () => {
  return (
    <div className='section-oracao '>
        <Container>
            <Row className='flex-center'>
                <div className='form-oracao col-5 '>
                    <h1>DEIXE SEU PEDIDO DE ORAÇÃO AQUI!</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control className="form"type="email" placeholder="Escreva seu nome..." />

                                <Form.Label>Celular</Form.Label>
                                <Form.Control type="tel" placeholder="(11) 99999-9999" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Pedido de Oração</Form.Label>
                                <Form.Control placeholder="Escreve seu pedido de oração aqui..." as="textarea" rows={7} />
                            </Form.Group>
                        </Form>
                        <Button className='button'  type="submit"> Enviar</Button>
                </div>
            </Row>
        </Container>

    </div>
  )
}

export default Oracao