import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const NamesList = (props) => {
    const { listOfNames } = props

    const handlerDelete = (name) => {
        props.deletePolicy(name)    
    }

    return(
        <Container>
            {
                listOfNames.map((policy) => {
                    return (
                        <Row>
                            <Col>{policy.name}</Col>
                            <Col>{policy.amount}</Col>
                            <Col>
                                <Button onClick={handlerDelete}>
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    )
                })
            }
            List
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
        listOfNames: state.namesList
    }
}

export default connect (mapStateToProps)(NamesList)