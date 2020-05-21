import React, {Component} from 'react'
import NavigationBar from '../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Developer extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <br />
                <Container>
                    <div>
                        <h1>Developer</h1>
                        <br/>
                        <Row>
                            <Col md lg="8">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Role Description</td>
                                            <td>
                                                <p>The job of a software developer depends on the needs of the company, organization or team they are on. Some build and 
                                                    maintain systems that run devices and networks. Others develop applications that make it possible for people to perform 
                                                    specific tasks on computers, cellphones or other devices.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Required Training</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <br/>   
                    </div>
                </Container>
            </div>
        )
    }
}


export default Developer