import React, {Component} from 'react'
import NavigationBar from '../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class QA extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <br />
                <Container>
                    <div>
                        <h1>QA</h1>
                        <br/>
                        <Row>
                            <Col md lg="8">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Role Description</td>
                                            <td>
                                                <p>The workers in the QA division plan the tests and test software. They perform everything necessary to ensure 
                                                    the quality of software and procedures.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Required Training</td>
                                            <td>
                                                <ul>
                                                    <li>Experience on Testing: Integration Testing, System Testing.</li>
                                                    <li>Training on design of Testing.</li>
                                                    <li>Training on the guidelines of quality and processes exclusive to the company.</li>
                                                    <li>Training on quality software.</li>
                                                    <li>Training on testing documentation: generate reports.</li>
                                                </ul>
                                            </td>
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


export default QA