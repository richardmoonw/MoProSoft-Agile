import React, {Component} from 'react'
import NavigationBar from '../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'

class A25AddFinalChanges extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <br />
                <Container>
                    <div>
                        <h1>Software Development and Maintenance</h1>
                        <br/>
                        <Row>
                            <Col md lg="8">
                                <Table>
                                    <thead>
                                        <th>Activity</th>
                                        <th>A5.8 Add the final changes Testing Plan Report, Operations' Manual and User's Manual in the Configuration Management System</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b>Roles</b></td>
                                            <td>
                                                <p>Developer.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Brief Description</b></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><b>Inputs</b></td>
                                            <td>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Outputs</b></td>
                                            <td>
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


export default A25AddFinalChanges