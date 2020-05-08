import React, {Component} from 'react'
import NavigationBar from '../NavigationBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class MainScreen extends Component {
    render(){
        return (
            <Container>
                <Row>
                    <Col md lg="1"></Col>
                    <Col md lg="8">
                        <img src="https://lh5.googleusercontent.com/xw0B61pb7gYihw36cRVcT6UtCGMQaUMjgavWaJhmIyffJc-3FpU-x-ZLI2QmO5HTUSSAHcn-SIZuZMNGORu4O36XJHZk0z5D0JxKsExDl1p5oMv1NCIqFkJIqvuoJvU-mtLuuzhM" height= '500' width='500' alt="My Logo" />
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default MainScreen