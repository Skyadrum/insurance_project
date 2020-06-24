import React from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createPolicy } from '../../Actions'


const policyForm = (props) => {

  const nameRef = React.createRef()
  const amountRef = React.createRef()

  const handlerCreate = () => {
      const policyObj = {
          name: nameRef.current.value,
          amount: parseInt(amountRef.current.value)
      }
      props.createPolicy(policyObj.name, policyObj.amount)
  }

  return (
    <div className='cards'>
        <Card  border="primary">
            <Card.Header as="h5" className='card-header'>Create a New Policy</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group as={Row}>
                      <Form.Label column sm={2}>Name</Form.Label>
                      <Col sm={10}>
                      <Form.Control type="text" placeholder="Name" ref={ nameRef }/>
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                      <Form.Label column sm={2}>Amount</Form.Label>
                      <Col sm={10}>
                      <Form.Control type="text" placeholder="EX: $100.00" ref={ amountRef }/>
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                      <Col sm={{ span: 10, offset: 2 }}>
                      <Button onClick= { handlerCreate }>Create</Button>
                      </Col>
                  </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    </div>
  )
}

export default connect(null, {createPolicy})(policyForm)
