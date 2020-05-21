import React, {Component} from 'react'
import NavigationBar from '../NavigationBar'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'

class A23PerformSystemTesting extends Component {
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
                                        <th>A5.5 Perform System Testing</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b>Roles</b></td>
                                            <td>
                                                <Link redirect to="qa"><p>QA</p></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Brief Description</b></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><b>Inputs</b></td>
                                            <td>
                                                <p>System Testing Plan</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Outputs</b></td>
                                            <td>
                                                <p>System Testing Report Plan</p>
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


export default A23PerformSystemTesting