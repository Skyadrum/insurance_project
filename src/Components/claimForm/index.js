import React from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { createClaim } from '../../Actions'
import { connect } from 'react-redux'

const claimForm = (props) => {

  const nameRef = React.createRef()
  const amountRef = React.createRef()

  const handlerCreateClaim = () => {
    const claimObj = {
      name: nameRef.current.value,
      amount: parseInt(amountRef.current.value)
    }
    props.createClaim(claimObj)
  }

  return (
    <div className='cards'>
        <Card  border="primary">
            <Card.Header as="h5" className='card-header'>New Claim</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group as={Row}>
                      <Form.Label column sm={2}>Name</Form.Label>
                      <Col sm={10}>
                      <Form.Control type="text" ref={ nameRef } placeholder="Name" />
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                      <Form.Label column sm={2}>Amount</Form.Label>
                      <Col sm={10}>
                      <Form.Control type="text" ref={ amountRef } placeholder="EX: $100.00" />
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                      <Col sm={{ span: 10, offset: 2 }}>
                      <Button onClick={ handlerCreateClaim }>Create</Button>
                      </Col>
                  </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    </div>
  )
}

export default connect(null, {createClaim})(claimForm)
