import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Menu = () => {
  return(
      <div>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand>
              <span className="head">Insurance Carrier</span>
          </Navbar.Brand>

          <Nav className="ml-auto">
            <Link to="/">
              <Button variant="outline-primary" className='btn' >Polices</Button>
            </Link>

            <Link to="/claimForm">
              <Button variant="outline-success" className='btn' >Polices</Button>
            </Link>
          </Nav>
      </Navbar>
    </div>
  )
}
export default Menu
