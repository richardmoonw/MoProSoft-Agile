import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.css'

class NavigationBar extends Component {
    render() {
        return (
            
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Link to="/">
                <Navbar.Brand>
                    <img src={require("./assets/logo.png")} width="30" height="30" marginRight="20px" className="d-inline-block align-top" />
                    MoProSoft Agile
                </Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
          </Navbar>

            
        )
    }
}

export default NavigationBar